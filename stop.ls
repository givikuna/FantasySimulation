require! {
    fs: fs
    'prelude-ls': { last }
    './lib/System': { exec }
    process: process
}

fs
    |> (.read-file-sync)
    |> --> it './database/simulationRunningLogs.json' \utf-8
    |> JSON.parse
    |> last
    |> (.processID)
    |> process.kill
    |> --> exec 'docker kill $(docker ps -qf expose=8080)'
