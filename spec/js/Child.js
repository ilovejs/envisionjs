describe('Child', function () {

  var
    CN_CHILD = 'envision-child',
    S_CHILD = '.' + CN_CHILD,
    H = envision;

  it('defines child', function () {
    expect(H.Child).toBeDefined();
  });

  it('creates a child', function () {
    var
      child = new H.Child();
    expect(child).toBeDefined();
  });

  describe('Render', function () {

    var
      div, $div;

    beforeEach(function () {
      div = document.createElement('div');
      $div = $(div);
      document.body.appendChild(div);
    });

    afterEach(function () {
      document.body.removeChild(div)
      div = null;
      $div = null;
    });

    it('renders', function () {
      var
        child = new H.Child();
      child.render(div);
      expect($div).toContain(S_CHILD);
    });

    it('renders inside a configured element', function () {
      var
        child = new H.Child({element : div});
      child.render();
      expect($div).toContain(S_CHILD);
    });

    it('assigns a name', function () {
      var
        name = 'test',
        child = new H.Child({name : name});
      child.render(div);
      expect($div.attr('class')).toBe(name);
    });

    it('doesnt assign a name when name not present', function () {
      var
        child = new H.Child(),
        name  = 'basename';
      $div.addClass('basename');
      child.render(div);
      expect($div.attr('class')).toBe(name);
    });

    it('assigns a height and width', function () {
      var
        height = 175,
        width = 250,
        child = new H.Child({height : height, width: width}),
        node;
      child.render(div);
      node = $div.find(S_CHILD);
      expect(node.width()).toBe(width);
      expect(node.height()).toBe(height);
    });

    it('sets height and width dynamically', function () {
      var
        height = 175,
        width = 250,
        child = new H.Child({height : height, width: width});
      child.render(div);
      expect(child.width).toBeDefined();
      expect(child.height).toBeDefined();
    });
  });
});
