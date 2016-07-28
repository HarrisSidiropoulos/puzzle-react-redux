export default class PuzzleParts {
  constructor(columns=4, rows=3, width=800, height=600) {
    this.columns = columns;
    this.rows = rows;
    this.width = width;
    this.height = height;
  }
  initParts() {
    const a = []
    const l = this.columns*this.rows
    const w = this.width / this.columns
    const h = this.height / this.rows
    this.emptyIndex = l-1;
    for (let i=0;i<l;i++) {
      a.push(
        {
          index: i,
          label: i + 1,
          empty: i==l-1,
          x: 0,
          y: 0,
          w: w,
          h: h
        }
      )
    }
    return {
      parts: this.getParts(a),
      emptyIndex: a.length-1,
      columns: this.columns,
      rows: this.rows
    }
  }
  getParts(parts) {
    let x = 0;
    let y = 0;
    parts.forEach((item, index)=> {
      item.x = x;
      item.y = y;
      if (x + item.w === this.width) {
        x = 0;
        y += item.h
      } else {
        x += item.w
      }
    })
    return parts
  }
  getNewIndex(index) {
    switch(this.emptyIndex) {
      case index - this.columns:
      case index + this.columns:
      case index + 1:
      case index - 1:
        return this.emptyIndex
      default:
        return index
    }
  }
  changeParts(i, parts) {
    const newIndex = this.getNewIndex(i);
    if (i!=newIndex) {
      const emptyPart = parts.find(({index})=>newIndex===index)
      const part = parts.find(({index})=>i===index)
      // parts.splice(emptyIndex, 1, part)
      // parts.splice(index, 1, emptyPart)
      const partX = part.x
      const partY = part.y
      part.x = emptyPart.x
      part.y = emptyPart.y
      emptyPart.x = partX
      emptyPart.y = partY
      part.index = newIndex
      emptyPart.index = i
      this.emptyIndex = i
    }
    return { parts:parts.slice(), emptyIndex:this.emptyIndex }
  }
}
