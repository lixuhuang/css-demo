const ops = {
  add: '新增',
  delete: '删除',
  query: '',
  update: '更新',
  modify: '修改'
}

const names = {
  empty_template: 'demo'
}

export function getTitle (op, name) {
  if (!name) {
    let hash = window.location.hash
    if (!hash) {
      return 'CMS'
    }
    let path = hash.substring(2, (hash.indexOf('?') !== -1) ? hash.indexOf('?') : hash.length)
    let paths = path.split('/')
    op = paths[1]
    name = paths[0]
  }
  name = name.replace(/-/g, '_')
  op = !op ? 'query' : op
  return ops[op] + names[name]
}

