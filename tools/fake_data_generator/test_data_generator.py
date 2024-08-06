import random
from datetime import datetime, timedelta
from opensearchpy import OpenSearch, helpers
from faker import Faker

host = '10.1.1.17'
port = 9200
auth = ('admin', 'NpBPagTwd4')

client = OpenSearch(
    hosts = [{'host': host, 'port': port}],
    http_compress = True, # enables gzip compression for request bodies
    http_auth = auth,
    use_ssl=True,
    verify_certs=False,
    ssl_assert_hostname=False,
    ssl_show_warn=False
)

# Initialize Faker for generating realistic fake data
fake = Faker()

# Define index names
ALERTS_INDEX = "ueba-alerts"
USER_ACTIVITIES_INDEX = "ueba-user-activities"
SENSITIVE_DATA_INDEX = "ueba-sensitive-data"
APPLICATIONS_INDEX = "ueba-applications"

# Generate test data
def generate_test_data(num_days=7, num_users=100, num_applications=5):
    # Generate applications
    applications = [f"App{i}" for i in range(1, num_applications + 1)]
    for app in applications:
        client.index(index=APPLICATIONS_INDEX, body={
            "app_id": app,
            "name": app,
            "description": fake.sentence(),
            "type": random.choice(["CRM", "ERP", "Email", "OA", "HR"])
        })

    # Generate sensitive data types
    sensitive_data_types = ["Customer Info", "Financial Reports", "Employee Records", "Product Designs", "Contract Documents"]
    for data_type in sensitive_data_types:
        client.index(index=SENSITIVE_DATA_INDEX, body={
            "data_id": data_type.lower().replace(" ", "_"),
            "data_type": data_type,
            "description": fake.sentence(),
            "sensitivity_level": random.choice(["High", "Medium", "Low"])
        })

    # Generate data for each day
    end_date = datetime.now()
    start_date = end_date - timedelta(days=num_days)
    current_date = start_date

    while current_date <= end_date:
        daily_alerts = random.randint(20, 50)
        daily_activities = daily_alerts * 10  # Assuming 10 activities per alert on average

        activities = []
        alerts = []

        for _ in range(daily_activities):
            user_id = f"user_{random.randint(1, num_users)}"
            app = random.choice(applications)
            data_type = random.choice(sensitive_data_types)

            # Generate user activity
            activities.append({
                "_index": USER_ACTIVITIES_INDEX,
                "_source": {
                    "timestamp": current_date.isoformat(),
                    "user_id": user_id,
                    "action": random.choice(["view", "edit", "delete", "download"]),
                    "data_type": data_type,
                    "application": app,
                    "details": {"ip_address": fake.ipv4()}
                }
            })

            # Generate alert (with lower probability)
            if random.random() < 0.1:  # 10% chance of generating an alert for each activity
                alerts.append({
                    "_index": ALERTS_INDEX,
                    "_source": {
                        "timestamp": current_date.isoformat(),
                        "alert_id": fake.uuid4(),
                        "risk_level": random.choice(["High", "Medium", "Low"]),
                        "user_id": user_id,
                        "data_type": data_type,
                        "application": app,
                        "description": fake.sentence(),
                        "status": random.choice(["Open", "Closed", "In Progress"])
                    }
                })

        # Bulk insert activities and alerts
        helpers.bulk(client, activities)
        helpers.bulk(client, alerts)

        current_date += timedelta(days=1)

# Run the data generation
if __name__ == "__main__":
    generate_test_data()
    print("Test data generation complete.")
