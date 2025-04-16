
import ContactComponent from '../components/ContactComponent'

interface ContactProps {
  darkMode?: boolean
}
export default function Contact(props: ContactProps) {

  return (
    <ContactComponent darkMode={props.darkMode ?? false} >
    </ContactComponent>
  )
}
