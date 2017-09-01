// Use on json-generator.com
{
  'states': [
    '{{repeat(15)}}',
    {
      'name': '{{state()}}',
      'color': function() {
        return '#'+Math.floor(Math.random()*16777215).toString(16);
      },
      'id': '{{index()}}',
      'cities': [
        '{{repeat(3, 7)}}',
        {
          'name': '{{city()}}',
          'color': function() {
            return '#'+Math.floor(Math.random()*16777215).toString(16);
          },
          'id': '{{index()}}',
          'locations': [
            '{{repeat(2, 8)}}',
            {
              'address': '{{integer(100, 999)}} {{street()}}',
              'id': '{{index()}}',
              'company': '{{company().toUpperCase()}}'
            }
          ]
        }
      ]
    }]
  }
