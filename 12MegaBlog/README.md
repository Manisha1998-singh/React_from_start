# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Input Component

This code is a reusable input component in React.

## More precisely:

It’s a custom React functional component created using React.forwardRef.

forwardRef is used so the parent can directly access the input’s DOM node (for focus, validation, etc.).

useId generates a unique id for the input and label, ensuring accessibility.

It’s styled with Tailwind CSS classes.

## Why useId?

In forms, every <label> should be linked to its <input> via the htmlFor and id.

If you just hardcode id="myInput", and then use multiple <Input /> components on a page, you’ll have duplicate IDs (bad for accessibility).

## useId() generates a unique, stable id per component instance, so each input-label pair stays unique.

Example:

<Input label="Name" />
<Input label="Email" />

→ useId ensures id="react-1" and id="react-2" (or similar), so labels point to the correct inputs.

## Why forwardRef?

Normally, if a parent uses:

const ref = useRef();
<Input ref={ref} />;

→ Without forwardRef, the ref points to the Input component itself, not the actual <input> element inside.

With forwardRef, React passes the ref down so it points directly to the DOM <input>.

That way, parent code can do:

ref.current.focus(); // focuses the input box

3. Why use them together?

useId → gives accessibility (label → input link).

forwardRef → gives control (focus, validation, scrolling).

So this makes the Input component both:
✔️ Accessible (labels work properly)
✔️ Controllable (parent can manage the input programmatically)

## 🔑 Purpose of key

key helps React identify which items have changed, been added, or removed in a list.

It gives each element a stable identity, so React can re-render efficiently.

📌 Example without key
function App() {
const fruits = ["Apple", "Banana", "Orange"];

return (

<ul>
{fruits.map((fruit) => (
<li>{fruit}</li> // ❌ Missing key
))}
</ul>
);
}

⚠️ React will warn: "Each child in a list should have a unique 'key' prop."

📌 Example with key
function App() {
const fruits = ["Apple", "Banana", "Orange"];

return (

<ul>
{fruits.map((fruit) => (
<li key={fruit}>{fruit}</li> // ✅ key added
))}
</ul>
);
}

🔥 Why is key important?

Imagine you update the list:

["Apple", "Banana", "Orange"] → ["Apple", "Mango", "Orange"]

With keys, React knows Banana was replaced by Mango.

Without keys, React may re-render the entire list unnecessarily.

## ⚠️ Rules for key:

Keys should be unique among siblings.

Example: use an id from your data, not just the array index.

Don’t use index as a key unless the list never changes (like a static list).

Keys don’t get passed as props — they’re only for React’s internal tracking.
