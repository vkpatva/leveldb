document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('saveButton');
    const valueInput = document.getElementById('valueInput');
    const statusDiv = document.getElementById('status');

    saveButton.addEventListener('click', () => {
        const value = valueInput.value;
        chrome.storage.sync.set({ blockmash: value }, () => {
            statusDiv.innerText = `Stored value: ${value}`;
        });
        chrome.storage.sync.get('blockmash', (data) => {
            if (data.blockmash) {
                statusDiv.innerText = `Stored value: ${data.blockmash}`;
            } else {
                statusDiv.innerText = 'No value stored';
            }
        });
    });

    chrome.storage.sync.get('blockmash', (data) => {
        if (data.blockmash) {
            statusDiv.innerText = `Stored value: ${data.blockmash}`;
        } else {
            statusDiv.innerText = 'No value stored';
        }
    });
});
