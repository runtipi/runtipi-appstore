# Whoami

Tiny Go webserver that prints OS information and HTTP request to output.

## Usage

### Paths

#### `/[?wait=d]`

Returns the whoami information (request and network information).

The optional `wait` query parameter can be provided to tell the server to wait before sending the response.
The duration is expected in Go's [`time.Duration`](https://golang.org/pkg/time/#ParseDuration) format (e.g. `/?wait=100ms` to wait 100 milliseconds).

The optional `env` query parameter can be set to `true` to add the environment variables to the response.

#### `/api`

Returns the whoami information (and some extra information) as JSON.

The optional `env` query parameter can be set to `true` to add the environment variables to the response.

#### `/bench`

Always return the same response (`1`).

#### `/data?size=n[&unit=u]`

Creates a response with a size `n`.

The unit of measure, if specified, accepts the following values: `KB`, `MB`, `GB`, `TB` (optional, default: bytes).

#### `/echo`

WebSocket echo.

#### `/health`

Heath check.

- `GET`, `HEAD`, ...: returns a response with the status code defined by the `POST`
- `POST`: changes the status code of the `GET` (`HEAD`, ...) response.
