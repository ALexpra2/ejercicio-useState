return (
    <div>
        <h2>Teacher Name: {name}</h2>
        <form onSubmit={changeName}>
    <input
      type="text"
      value={newName}
      onChange={(name) => setNewName(name.target.value)}
      placeholder="add a name"
    />
    <button type="submit">Add</button>
  </form>
    </div>
)