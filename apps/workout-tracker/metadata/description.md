> If no users are in the database (eg. when starting with an empty database), a
> default `admin` user is created with password `admin`. You should change this
> password in a production environment.

---

A workout tracking web application for personal use (or family, friends), geared
towards running and other GPX-based activities

Self-hosted, everything included.

Chat with the community
[on Matrix](https://matrix.to/#/#workout-tracker:matrix.org)

Heavily inspired by [FitTrackee](https://github.com/SamR1/FitTrackee).

## Configuration

You can enable registration and/or socials by following [this](https://runtipi.io/docs/guides/customize-app-config#create-custom-docker-config) guide and then copy-pasting the following code:

```yaml
services:
  workout-tracker:
    environment:
      - WT_REGISTRATION_DISABLED="true"
      - WT_SOCIALS_DISABLED="true"
```

## Screenshots

### Login page

![Workout-Tracker Login Page](https://github.com/jovandeginste/workout-tracker/blob/master/docs/login.png?raw=true)

Login / registration form

- new users have to be activated by an admin
- registration can be disabled

### Dashboard

![Workout-Tracker Dashboard](https://github.com/jovandeginste/workout-tracker/blob/master/docs/dashboard.png?raw=true)

Dashboard view with:

- personal totals
- running records
- a calendar view
- recent activities (by you and other users)

### Overview of workouts

![Workout-Tracker Workouts Overview](https://github.com/jovandeginste/workout-tracker/blob/master/docs/workout_overview.png?raw=true)

Overview of all your activities, with summaries.

### Details of a single workout

![Workout-Tracker Single Workout Details](https://github.com/jovandeginste/workout-tracker/blob/master/docs/single_workout-dark.png?raw=true)

Details of a workout, with:

- a zoomable, dragable map of the GPX track with more details per point
- many summarized statistics
- a breakdown per kilometer or per mile
- track color based on elevation of the segment
- graph of average speed and elevation per minute
- optional graph of heart rate, cadans

### Tooltips for even more information

![Workout-Tracker Tooltips](https://github.com/jovandeginste/workout-tracker/blob/master/docs/track.gif?raw=true)

- green and red circle are start and end points of the track
- every point on the track has a tooltip with a summary at that moment
- hover over the breakdown per kilometer to highlight the point

### Upload your files

![Workout-Tracker Upload Workouts](https://github.com/jovandeginste/workout-tracker/blob/master/docs/upload_workouts.png?raw=true)

- Upload one or multiple GPX files.
- Pick the type (running, cycling, ...) or let the application guess based on
  average speed.
- The files are parsed when uploaded: statistics and other information are
  calculated and stored in the database (serialized).
- Or add a workout manually.

### Statistics to follow your progress

![Workout-Tracker Statistics](https://github.com/jovandeginste/workout-tracker/blob/master/docs/statistics.png?raw=true)

- Graphs showing monthly aggregated statistics.
- Pick different time range or bucket size.

### Basic multi-language support

![Workout-Tracker Multi-Language Support](https://github.com/jovandeginste/workout-tracker/blob/master/docs/i18n.gif?raw=true)

- Switch between (supported) languages
  - Please help translate via
    [Weblate](https://hosted.weblate.org/projects/workout-tracker/)
- Use the language configured in the browser (default)
- Very limited amount of languages supported for now :smile:
- Re-calculate all previously uploaded workouts (useful while developing)

### Responsive design

![Workout-Tracker Responsive Design](https://github.com/jovandeginste/workout-tracker/blob/master/docs/statistics-responsive.png?raw=true)

- Usable on small and medium screens

### Light and dark mode

![Workout-Tracker Light and Dark Mode](https://github.com/jovandeginste/workout-tracker/blob/master/docs/single_workout-theme.jpg?raw=true)

- Browser decides whether to use light or dark mode, based on your preferences

## API usage

The API is documented using
[swagger](https://editor.swagger.io/?url=https://raw.githubusercontent.com/jovandeginste/workout-tracker/master/docs/swagger.yaml).
You must enable API access for your user, and copy the API key. You can use the
API key as a query parameter (`api-key=${API_KEY}`) or as a header
(`Authorization: Bearer ${API_KEY}`).

You can configure some tools to automatically upload files to Workout Tracker,
using the `POST /api/v1/import/$program` API endpoint.

### Generic upload

The generic upload endpoint takes the recording as body. Prepend the path with
`@` to tell `curl` to read the data from a file:

```bash
curl -sSL -H "Authorization: bearer your-api-key" \
  http://localhost:8080/api/v1/import/generic \
  --data @path/to/recorded.gpx
```

or

```bash
curl -sSL http://localhost:8080/api/v1/import/generic?api-key=your-api-key \
  --data @path/to/recorded.gpx
```

### FitoTrack

Read
[their documentation](https://codeberg.org/jannis/FitoTrack/wiki/Auto-Export)
before you continue.

The path to POST to is: `/api/v1/import/fitotrack?api-key=${API_KEY}`



## Compatiblity

This is a work in progress. If you find any problems, please let us know. The
application is tested with GPX files from these sources:

- Garmin Connect (export to GPX)
- FitoTrack (automatic export to GPX)
- Workoutdoors (export to GPX)
