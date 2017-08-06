var posts = [
  {title: 'about node.js', body: 'node.jsとは...'},
  {title: 'about express', body: 'expressとは...'},
  {title: 'about ejs', body: 'ejsとは...'},
];

exports.index = function(req, res) {
  res.render('posts/index', {posts: posts});
};

exports.show = function(req, res) {
  res.render('posts/show', {post: posts[req.params.id]});
};

exports.resjson = function(req, res) {
    if (posts[req.params.id] === undefined) {
        res.json(posts);
    } else {
        res.json(posts[req.params.id]);
    }
};
