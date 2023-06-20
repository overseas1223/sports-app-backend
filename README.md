## API

<h3>1. TEAM</h3>

Create Team
```bash
POST /api/v1/team/create
Request BODY:
{
    "name": "Clare Senior Hurling",
    "displayName": "Clare",
    "sport": "Hurling"
}
```

<h3>2. TEAM</h3>

Create Referee
```bash
POST /api/v1/referee/create
Request BODY:
{
    "name": "John Keenan",
    "location": "Galway"
}
```

<h3>2. Competition</h3>

Create Competition
```bash
POST /api/v1/competition/create
Request BODY:
{
    "name": "Munster Senior Hurling Championship",
    "sport": "Hurling",
    "teamCount": 5,
    "group": {
        "count": 1,
        "teamCount": 5
    },
    "tournament": {
        "teamCount": 2
    }
}
```