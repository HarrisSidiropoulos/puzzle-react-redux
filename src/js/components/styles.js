export const getStyles = ({x,y,w,h,bx,by}, images)=> {
  return {
    left:`${x}px`,
    top:`${y}px`,
    ...getBgStyles(bx,by, images),
    ...getSizeStyles(w,h)
  }
}
export const getBgImageStyles = (solved=true, images=[])=> {
  if (images.length==0) {
    throw(new Error('Images array must not be empty'))
  }
  return solved ? {
    backgroundImage: `url(${images[0]})`
  } : {}
}
export const getBgStyles = (x,y, images)=> {
  return {
    backgroundPosition: `-${x}px -${y}px`,
    ...getBgImageStyles(undefined, images)
  }
}
export const getSizeStyles = (w,h)=> {
  return {
    width:`${w}px`,
    height:`${h}px`
  }
}
