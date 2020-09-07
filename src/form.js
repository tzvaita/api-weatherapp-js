const searchForm = () => {
  const form = document.createElement('form');
  form.id = 'searchForm';
  const searchField = document.createElement('input');
  searchField.type = 'text';
  searchField.placeholder = 'Enter a city';
  searchField.name = 'search';
  searchField.id = 'search';
  searchField.required = true;

  const searchBtn = document.createElement('input');
  searchBtn.type = 'submit';
  searchBtn.value = 'Look up';
  searchBtn.id = 'searchBtn';

  form.appendChild(searchField);
  form.appendChild(searchBtn);

  return form;
};

export default searchForm;