export default class PuzzleParts {
  constructor(columns=4, rows=3, width=800, height=600, gap=4) {
    this.gap = gap;
    this.columns = columns;
    this.rows = rows;
    this.width = width;
    this.height = height;
    this.emptyIndex = columns*rows -1
    this.parts = []
  }
  initParts() {
    const a = []
    const l = this.columns * this.rows
    const w = Math.floor((this.width - (this.gap * this.columns)) / this.columns)
    const h = Math.floor((this.height - (this.gap * this.rows)) / this.rows)
    let x = this.gap/2;
    let y = this.gap/2;
    this.emptyIndex = l-1;
    for (let i=0;i<l;i++) {
      a.push(
        {
          index: i,
          label: i + 1,
          empty: i==l-1,
          bx: x,
          by: y,
          x: x,
          y: y,
          w: w,
          h: h
        }
      )
      if (Math.ceil(x + w) >= this.width-10) {
        x = this.gap/2;
        y += h + this.gap
      } else {
        x += w + this.gap
      }
    }
    this.parts = a;
    return {
      parts: a,
      emptyIndex: a.length-1,
      columns: this.columns,
      rows: this.rows
    }
  }
  isPuzzleSolved() {
    return this.parts.every(({index},i)=>index===i)
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
  shuffle(times=10000) {
    for (let i=0;i<times;i++) {
      this.parts = this.changeParts(this.getRandomIndex())
    }
    return this.parts
  }
  changeParts(oldIndex) {
    const newIndex = this.getNewIndex(oldIndex);
    if (oldIndex!=newIndex) {
      const emptyPart = this.parts.find(({index})=>newIndex===index)
      const part = this.parts.find(({index})=>oldIndex===index)
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
    return this.parts.slice()
  }
}
