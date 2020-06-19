import React from 'react'

function Pizza(props) {
    //initial values for the form fields
    const formValues = {
        name: '',
        size: '',
        pepperoni: false,
        sausage: false,
        mushrooms: false,
        olives: false,
        instructions: ''


    }

    const onSubmit = () => {
        //TODO create onSubmit handler
        return null
    }

    const onChange = () => {
        //TODO create state change handler
    }

    const onChangeCheckbox = () => {
        // TODO create state change handler for checkboxes
    }

    return (
        <div>
            <h2>Build Your Own Pizza</h2>
            <form onSubmit={onSubmit}>
                <label>Name&nbsp;
                    <input
                        type='text'
                        name='name'
                        onChange={onChange}
                        value={formValues.name}
                    />
                </label>

                <label>Select a Size&nbsp;
                    <select
                        // type='dropdown'
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
                <h4>Select Your Toppings</h4>
                <label>Pepperoni
                    <input 
                        name='pepperoni'
                        type='checkbox'
                        onChange={onChangeCheckbox}
                        checked={formValues.pepperoni}
                    />
                </label>

                <label>Sausage
                    <input 
                        name='suasage'
                        type='checkbox'
                        onChange={onChangeCheckbox}
                        checked={formValues.sausage}
                    />
                </label>

                <label>Mushrooms
                    <input 
                        name='mushrooms'
                        type='checkbox'
                        onChange={onChangeCheckbox}
                        checked={formValues.mushrooms}
                    />
                </label>

                <label>Black Olives
                    <input 
                        name='olives'
                        type='checkbox'
                        onChange={onChangeCheckbox}
                        checked={formValues.olives}
                    />
                </label>

                <label>Special Instructions:
                    <textarea value={formValues.instructions} onChange={onChange} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Pizza