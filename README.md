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

<h3>3. Competition</h3>

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

<h3>4. Season</h3>

Create Season
```bash
POST /api/v1/season/create
Request BODY:
{
    "year": 2023,
    "competition": "64918972136bd8c2de03d6e2"
}
```

Add Teams to Season
```bash
POST /api/v1/season/:seasonId/add-teams
Request BODY:
{
    "teams": [
        "6490e0b98612a014ebd1ca1a",
        "6490e0cb8612a014ebd1ca1c",
        "6490e0d98612a014ebd1ca1e",
        "6490e0e78612a014ebd1ca20",
        "6490e0f28612a014ebd1ca22"
    ]
}
```

Group Teams
```bash
POST /api/v1/season/:seasonId/group-teams
Request BODY:
{
    "groups": [
        [
            "6490e0b98612a014ebd1ca1a",
            "6490e0cb8612a014ebd1ca1c",
            "6490e0d98612a014ebd1ca1e",
            "6490e0e78612a014ebd1ca20",
            "6490e0f28612a014ebd1ca22"
        ]
    ]
}
```

<h3>5. Group</h3>

Group Match
```bash
POST /api/v1/group/:groupId/add-match
Request BODY:
{
    "matchDay": 5,
    "matchDate": "2023-05-28T16:00:00.000+00:00",
    "venue": "Semple Stadium",
    "homeTeam": "6490e0cb8612a014ebd1ca1c",
    "awayTeam": "6490e0d98612a014ebd1ca1e",
    "neutralVenue": false,
    "referee": "6490e1518612a014ebd1ca30",
    "normalTime": {
        "home": {
            "goal": 0,
            "point": 21
        },
        "away": {
            "goal": 1,
            "point": 24
        }
    }
}
```

<h3>6. Tournament</h3>

Create Tournament
```bash
POST /api/v1/tournament/create
Request BODY:
{
    "seasonId": "64919368b41c6b13f02d1969",
    "teams": [
        "6490e0b98612a014ebd1ca1a",
        "6490e0f28612a014ebd1ca22"
    ]
}
```

Tournament Match
```bash
POST /api/v1/tournament/:tournamentId/add-match
Request BODY:
{
    "roundIndex": 0,
    "match": {
        "matchDate": "2023-06-11T13:45:00.000+00:00",
        "venue": "Gaelic Grounds",
        "homeTeam": "6490e0b98612a014ebd1ca1a",
        "awayTeam": "6490e0f28612a014ebd1ca22",
        "neutralVenue": false,
        "referee": "64906e95e746e7bff4befe8d",
        "normalTime": {
            "home": {
                "goal": 1,
                "point": 23
            },
            "away": {
                "goal": 1,
                "point": 22
            }
        }
    }
}
```