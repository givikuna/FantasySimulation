require! {
    fs: fs
    dockerode: Docker
    'prelude-ls': { last, map }
    './lib/System': { exec }
    process: process
}


( fs.read-file-sync './database/simulationRunningLogs.json' \utf16le )
    |> last
    |> --> [it.containerID, it.processID]
    |> --> [(it[0]
        |> (new Docker!).get-container
        |> (.kill!)),
        process.kill(it[1])]
