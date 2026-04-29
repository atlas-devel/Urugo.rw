function AdminProperties() {
  return (
    <div>
      <input
        className="border rounded-xl px-3"
        placeholder="select"
        list="languages"
      />
      <datalist id="languages">
        <option value="JavaScript" />
        <option value="Python" />
        <option value="Java" />
        <option value="C#" />
        <option value="Ruby" />
        <option value="Go" />
        <option value="PHP" />
        <option value="Swift" />
        <option value="Kotlin" />
        <option value="TypeScript" />
      </datalist>
    </div>
  );
}

export default AdminProperties;
