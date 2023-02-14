import { useContext, useRef } from 'react'
import Context from '../Context/context';
import toggleModal from '../utils/modal'
import { Form } from './'

export default function Modal(props) {
        const { type, submit } = props;
        const { temp, createitem } = useContext(Context)

        const buttonRef = useRef()
        const refClick = () => { buttonRef.current.click() }
        temp.refModal = refClick
        const modalToggal = (e) => { toggleModal(e) }

        const create = (e) => {
                e.preventDefault()
                createitem(temp.url)
                temp.url = ''
                temp.refModal()
        }

        return (<>
                <button style={{ display: 'none' }} ref={buttonRef} data-target="modal-example" onClick={modalToggal} />
                <dialog id="modal-example" ><article>
                        <a href="#close" aria-label="Close" className="close" data-target="modal-example" onClick={modalToggal}></a>
                        <hgroup><h3>Title</h3><p>Subtitle</p></hgroup>
                        <Form type='create' submit={create} />
                </article></dialog>
        </>)
}
{/*  */ }