import React, { useState } from 'react';

function SimpleForm() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        agreeToTerms: false,
        subscription: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.age || isNaN(formData.age)) newErrors.age = 'Valid age is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
        if (!formData.subscription) newErrors.subscription = 'Subscription is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            alert('Form submitted successfully!');
            console.log(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>

            <div>
                <label>Age:</label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                />
                {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
            </div>

            <div>
                <label>Gender:</label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                /> Male
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                /> Female
                {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
            </div>

            <div>
                <label>Subscription:</label>
                <select
                    name="subscription"
                    value={formData.subscription}
                    onChange={handleChange}
                >
                    <option value="">Select...</option>
                    <option value="basic">Basic</option>
                    <option value="premium">Premium</option>
                    <option value="vip">VIP</option>
                </select>
                {errors.subscription && <p style={{ color: 'red' }}>{errors.subscription}</p>}
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                    /> I agree to the terms and conditions
                </label>
                {errors.agreeToTerms && <p style={{ color: 'red' }}>{errors.agreeToTerms}</p>}
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default SimpleForm;
