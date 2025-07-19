

export const GifGridItem = ({title, id, url}) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
