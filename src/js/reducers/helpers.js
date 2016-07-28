export default class PuzzleParts {
  constructor(columns=4, rows=3, width=800, height=600, gap=4) {
    this.gap = gap;
    this.columns = columns;
    this.rows = rows;
    this.width = width;
    this.height = height;
  }
  initParts() {
    const a = []
    const l = this.columns * this.rows
    const w = Math.floor(this.width / this.columns)
    const h = Math.floor(this.height / this.rows)
    this.emptyIndex = l-1;
    for (let i=0;i<l;i++) {
      a.push(
        {
          index: i,
          label: i + 1,
          empty: i==l-1,
          x: 0,
          y: 0,
          w: w - this.gap,
          h: h - this.gap
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
      if (Math.ceil(x + item.w) >= this.width-10) {
        x = 0;
        y += item.h + this.gap
      } else {
        x += item.w + this.gap
      }
    })
    return parts
  }
  getNewIndex(index) {
    let a = this.getNeigborParts()
    if (a.indexOf(index)>=0) {
      return this.emptyIndex;
    }
    return index;
  }
  getNeigborParts() {
    let a = []
    a.push(this.emptyIndex - this.columns)
    a.push(this.emptyIndex + this.columns)
    if ((this.emptyIndex+1)%this.columns!==0) {
      a.push(this.emptyIndex + 1)
    }
    if (this.emptyIndex%this.columns!==0) {
      a.push(this.emptyIndex - 1)
    }
    return a.filter(value => value>=0 && value<this.columns * this.rows)
  }
  getRandomIndex() {
    let a = this.getNeigborParts()
    return a[Math.floor(Math.random()*a.length)]
  }
  shuffle(parts) {
    for (let i=0;i<10000;i++) {
      this.changeParts(this.getRandomIndex(), parts)
    }
  }
  changeParts(oldIndex, parts) {
    const newIndex = this.getNewIndex(oldIndex);
    if (oldIndex!=newIndex) {
      const emptyPart = parts.find(({index})=>newIndex===index)
      const part = parts.find(({index})=>oldIndex===index)
      const partX = part.x
      const partY = part.y
      part.x = emptyPart.x
      part.y = emptyPart.y
      emptyPart.x = partX
      emptyPart.y = partY
      part.index = newIndex
      emptyPart.index = oldIndex
      this.emptyIndex = oldIndex
    }
    return { parts:parts.slice(), emptyIndex:this.emptyIndex }
  }
}
