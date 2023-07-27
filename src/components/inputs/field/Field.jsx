import './field.css';

export default function Field({ label = 'Name', name = 'name', ...otherProps }) {
   return (
      <div className="input-holder">
         <input placeholder=" " {...otherProps} />
         <label className="label" for={name}>
            {label}
         </label>
      </div>
   );
}
