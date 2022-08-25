import './index.css';

const Footer = ({}) => {
    const date = new Date().getFullYear()
  return (
    <footer>
<span>@copyright {date} </span>


    </footer>
  )
}

export default Footer