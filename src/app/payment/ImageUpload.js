import { useState } from 'react';

const ImageUpload = ({ onUpload }) => {
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
            onUpload(file);
        }
    };

    return (
        <div style={{ marginTop: '2px' }}>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center'}}>
                {previewUrl && <img src={previewUrl} alt="Preview" width="200" />}
            </div>
        </div>
    );
};

export default ImageUpload;

