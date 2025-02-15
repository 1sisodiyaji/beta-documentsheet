import TabComponent from '../../components/contact/TabComponent'
import ContactPageMessage from '../../components/contact/ContactPageMessage'

const Contact = () => {
  return (
    <div className="pt-24  p-1 space-y-6">
      <h2 className="md:text-xl text-sm text-center ">
        {' '}
        Got questions or need support? We’re just a message away.
      </h2>
      <div className="flex justify-center items-center ">
        {' '}
        <TabComponent />{' '}
      </div>
      <h2 className="md:text-xl text-sm text-center ">
        {' '}
        Got a query? Let us know, and we’ll respond promptly!
      </h2>
      <div className="flex justify-center items-center">
        {' '}
        <ContactPageMessage />{' '}
      </div>
    </div>
  )
}

export default Contact
