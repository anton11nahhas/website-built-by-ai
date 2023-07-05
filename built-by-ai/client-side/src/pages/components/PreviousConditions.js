import React from "react";

function PreviousConditions({ conditions, formData, handleConditionChange, handleInputChange }) {
    return (
        <>
            <div className="text-left">
                <label>Previous Conditions:</label>
                {conditions.map((condition) => (
                    <div key={condition.id}>
                        <input
                            type="checkbox"
                            name={condition.id}
                            checked={formData.conditions.includes(condition.id)}
                            onChange={handleConditionChange}
                        />
                        <label>{condition.name}</label>
                    </div>
                ))}
                <div>
                    <input
                        type="checkbox"
                        name="other"
                        checked={formData.conditions.includes('other')}
                        onChange={handleConditionChange}
                    />
                    <label>Other:</label>
                    <input
                        type="text"
                        name="otherConditions"
                        value={formData.otherConditions}
                        onChange={handleInputChange}
                        disabled={!formData.conditions.includes('other')}
                        placeholder="include any other previous conditions"
                    />
                </div>
            </div>
        </>
    );
}

export default PreviousConditions;
