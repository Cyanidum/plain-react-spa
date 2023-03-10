import './scss/popup.scss';

const Popup = ({ active, setActive, children }) => {
	return (
		<div className={active ? "popup active" : "popup"} onClick={()=> setActive(false)}>
			<div className="popup__content" onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
}
 
export default Popup;