const ops = {
  add: 'c',
  delete: 'd',
  query: 'r',
  update: 'u',
  modify: 'u'
}

const escape = [
  'register',
  'login',
  'home',
  'index',
  'login'
]

export function check (op, name) {
  let hash = window.location.hash
  if (!hash) {
    return true
  }
  let path = hash.substring(2, (hash.indexOf('?') !== -1) ? hash.indexOf('?') : hash.length)
  let paths = path.split('/')
  op = !op ? paths[1] : op
  name = name === undefined ? paths[0] : name
  name = name.replace(/-/g, '_')
  if (escape.indexOf(name) !== -1) {
    return true
  }
  op = !op ? 'query' : op
  return !window.permissions[name] ? false : (window.permissions[name].indexOf(ops[op]) !== -1)
}
