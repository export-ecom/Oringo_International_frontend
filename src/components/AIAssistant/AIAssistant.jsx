import React from 'react';

function AIAssistant() {
    const handleClick = () => {
        alert('AI Assistant Activated!');
    };

    return (
        <>
            <div className="ai-assistant-label">AI Assistant</div>
            <button
                type="button"
                className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center ai-assistant-btn"
                onClick={handleClick}
                title="AI Assistant"
            >
            </button>
        </>
    );
}

export default AIAssistant;
