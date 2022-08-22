export const MyInput = (props) => {
  return (
    <label class="flex flex-col">
      <div class=" w-full block relative text-sm text-slate-600">
        <p>{props.labelText}</p>
        <Show when={props.value} fallback={<></>}>
          <button
            onClick={(e) => props.handleChenge("")}
            class=" absolute right-5 -bottom-7  text-red-500 w-10"
          >
            X
          </button>
        </Show>
      </div>
      <input
        onBlur={props.onBlur}
        type={props.type}
        onClick={props.onClick}
        onChange={(e) => props.handleChenge(e.currentTarget.value)}
        value={props.value}
        min={props.min}
        class="w-64 py-1 px-2 text-slate-600 border hover:border-greenbg-100 focus:border-greenbg-200 focus-visible:outline-greenbg-200"
      />
    </label>
  );
};
