function processGraph(g) {
  const queuedOrProcessed = new Set()
  const frontier = []
  frontier.push(g.start)
  queuedOrProcessed.add(g.start)
  let dist = 0
  const dists = {}
  while (frontier.length) {
    const size = frontier.length
    for (let i = 0; i < size; i++) {
      const next = frontier.shift()
      dists[next] = dist
      if (!g[next]) {
        continue
      }
      for (const child of g[next]) {
        if (!queuedOrProcessed.has(child)) {
          frontier.push(child)
          queuedOrProcessed.add(child)
        }
      }
    }
    dist += 6
  }
  const out = []
  for (let i = 1; i <= g.n; i++) {
    if (i.toString() === g.start) {
      continue
    }
    out.push(dists.hasOwnProperty(i.toString()) ? dists[i.toString()] : -1)
  }
  return out.join(' ')
}

function processData(input) {
  const lines = input.split('\n')
  let j = 1
  for (let i = 0; i < parseInt(lines[0], 10); i++) {
    const [n, m] = lines[j++].split(' ')
    const g = {
      // V: new Set(),
      n: parseInt(n, 10),
      m: parseInt(m, 10),
    }
    while (lines[j].indexOf(' ') > 0) {
      const [a, b] = lines[j].split(' ')
      if (!g[a]) {
        g[a] = new Set()
      }
      if (!g[b]) {
        g[b] = new Set()
      }
      // g.V.add(a)
      // g.V.add(b)
      g[a].add(b)
      g[b].add(a)
      j++
    }
    g.start = lines[j++]
    console.log(processGraph(g))
  }
}

process.stdin.resume()
process.stdin.setEncoding('ascii')
_input = ''
process.stdin.on('data', (input) => {
  _input += input
});

process.stdin.on('end', () => {
  processData(_input)
});
