class GameObject {
  constructor(ref, type) {
    this.x = ref && ref.current && ref.current.style && (ref.current.style.left)
    this.y = ref && ref.current && ref.current.style && ref.current.style.top
    this.width = ref && ref.current && ref.current.style && ref.current.style.width
    this.height = ref && ref.current && ref.current.style && ref.current.style.height
    this.type = type
  }
}

export default GameObject
