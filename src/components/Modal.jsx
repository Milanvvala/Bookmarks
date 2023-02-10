import { useContext, useRef } from 'react'
import { Context } from '../Context/mainContext'
import toggleModal from '../utils/modal'
import Form from './Form'

export default function Modal(props) {
        const { type, submit } = props;
        const { temp } = useContext(Context)
        const buttonRef = useRef()
        const refClick = () => { buttonRef.current.click() }
        temp.refModal = refClick
        const modalToggal = (e) => { toggleModal(e) }

        return (<>
                <button style={{ display: 'none' }} ref={buttonRef} data-target="modal-example" onClick={modalToggal} /> 
                <dialog id="modal-example" ><article>
                        <a href="#close" aria-label="Close" className="close" data-target="modal-example" onClick={modalToggal}></a>
                        <hgroup><h3>Title</h3><p>Subtitle</p></hgroup>
                        <Form type='create' submit={submit} />
                </article></dialog>
        </>)
}
{/* <button style={{ display: 'none' }} data-target="modal-example" onClick={refClick} > lmd ref</button> */ }