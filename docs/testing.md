

# Axios is mocked -> see __mocks__ directory
need to use
```
const axios = jest.requireActual('axios');
```

