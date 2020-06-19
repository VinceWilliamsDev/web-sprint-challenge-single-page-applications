import React from 'react'


function Pizza(props) {

    const {formValues, onSubmit, onChange, onChangeCheckbox, errors, onNameChange} = props



    return (
        <div>
            <h2>Build Your Own Pizza</h2>
            <form onSubmit={onSubmit}>
                <label>Name&nbsp;
                    <input
                        type='text'
                        name='name'
                        onChange={onNameChange}
                        value={formValues.name}
                    />
                    {errors.name.length > 0 ? (<p>{errors.name}</p>) : null}
                </label>
                <br />
                <label>Select a Size&nbsp;
                    <select
                        name='size'
                        value={formValues.size}
                        onChange={onChange}
                    >
                        <option value=''>-- Select a Size --</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                <br />
                <h4>Select Your Toppings</h4>
                <label>Pepperoni
                    <input 
                        name='pepperoni'
                        type='checkbox'
                        onChange={onChangeCheckbox}
                        checked={formValues.pepperoni}
                    />
                </label>
                <br />
                <label>Sausage
                    <input 
                        name='sausage'
                        type='checkbox'
                        onChange={onChangeCheckbox}
                        checked={formValues.sausage}
                    />
                </label>
                <br />
                <label>Mushrooms
                    <input 
                        name='mushrooms'
                        type='checkbox'
                        onChange={onChangeCheckbox}
                        checked={formValues.mushrooms}
                    />
                </label>
                <br />
                <label>Black Olives
                    <input 
                        name='olives'
                        type='checkbox'
                        onChange={onChangeCheckbox}
                        checked={formValues.olives}
                    />
                </label>
                <br />
                <label>Special Instructions&nbsp;
                    <input
                        type='text'
                        name='instructions'
                        onChange={onChange}
                        value={formValues.instructions}
                    />
                </label>
                <br />
                <button id='submit'>Add to Order</button>
            </form>
        </div>
    )
}

export default Pizza