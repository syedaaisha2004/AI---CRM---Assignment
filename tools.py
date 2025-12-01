# Simple LangGraph Tools File for Assignment

def log_interaction_tool(data):
    return {
        "tool": "log_interaction",
        "message": "Interaction logged successfully",
        "data_received": data
    }

def edit_interaction_tool(data):
    return {
        "tool": "edit_interaction",
        "message": "Interaction edited",
        "updated_data": data
    }

def fetch_hcp_tool(name):
    return {
        "tool": "fetch_hcp",
        "message": f"Fetched details for {name}"
    }

def generate_followup_tool(data):
    return {
        "tool": "generate_followup",
        "followup": "Follow-up suggested after 7 days"
    }

def insights_tool():
    return {
        "tool": "insights",
        "top_hcp": "Dr. Example",
        "summary": "You visited 5 HCPs this week"
    }