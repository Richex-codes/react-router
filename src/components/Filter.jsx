function Filter({ handleTitle, handleRating, handleSubmit }) {
  return (
    <div>
      <section style={{ marginTop: "30px" }}>
        <h1>Filter</h1>
        <input
          onChange={handleRating}
          type="text"
          name="rating"
          placeholder="rating"
        />
        <input
          onChange={handleTitle}
          type="text"
          name="title"
          placeholder="title"
        />
        <button onClick={handleSubmit}>Submit</button>
      </section>
    </div>
  );
}

export default Filter;
