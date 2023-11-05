import { createRoot } from 'react-dom/client';
import './style.css'
const div = document.createElement('div');
div.id = '__root';
document.body.appendChild(div);

const rootContainer = document.querySelector('#__root');
if (!rootContainer) throw new Error("Can't find Options root element");
// create a shadow root
const shadowRoot = rootContainer.attachShadow({ mode: 'open' });
// append a div to the shadow root
const shadowRootContainer = document.createElement('div');
shadowRootContainer.id = '__shadow_root';
shadowRoot.appendChild(shadowRootContainer);

const root = createRoot(shadowRootContainer);
root.render(
  <div className='absolute bottom-0 left-0 text-lg text-black bg-amber-400 z-50'  >
    content script loaded
  </div>
);

try {
  console.log('content script loaded');
} catch (e) {
  console.error(e);
}
