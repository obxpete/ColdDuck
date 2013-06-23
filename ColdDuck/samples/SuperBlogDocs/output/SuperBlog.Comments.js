Ext.data.JsonP.SuperBlog_Comments({"tagname":"class","name":"SuperBlog.Comments","extends":"SuperBlog.MyBaseClass","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-SuperBlog.Comments","code_type":"ext_define","members":{"cfg":[],"property":[],"method":[{"name":"addComment","tagname":"method","owner":"SuperBlog.Comments","meta":{},"id":"method-addComment"},{"name":"init","tagname":"method","owner":"SuperBlog.Comments","meta":{},"id":"method-init"},{"name":"removeComment","tagname":"method","owner":"SuperBlog.Comments","meta":{},"id":"method-removeComment"},{"name":"writeToLog","tagname":"method","owner":"SuperBlog.MyBaseClass","meta":{"private":true},"id":"method-writeToLog"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"SuperBlog.Comments.js","href":null}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["WEB-INF.cftags.component","SuperBlog.MyBaseClass"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>WEB-INF.cftags.component<div class='subclass '><a href='#!/api/SuperBlog.MyBaseClass' rel='SuperBlog.MyBaseClass' class='docClass'>SuperBlog.MyBaseClass</a><div class='subclass '><strong>SuperBlog.Comments</strong></div></div></div></pre><div class='doc-contents'><h1>Comments class</h1>\n\n<p>I am a component that adds comments to posts.<br>I am being rendered using a combination of markdown and HTML. <strong>Nifty!</strong></p>\n\n<h2>ColdFusion tip:</h2>\n\n<p>Since CF uses # and so does Markdown, you need to double up your CF # so that Markdown does the right thing.</p>\n\n<h2>You can include code samples by indenting 4 spaces</h2>\n\n<pre><code>My code example here\n</code></pre>\n\n<p>Finally, some more info could go here....</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addComment' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SuperBlog.Comments'>SuperBlog.Comments</span><br/></div><a href='#!/api/SuperBlog.Comments-method-addComment' class='name expandable'>addComment</a>( <span class='pre'>commentText</span> ) : any</div><div class='description'><div class='short'>I add a comment to a blog post\n\nYou must always be nice in blog posts! ...</div><div class='long'><p>I add a comment to a blog post</p>\n\n<p>You must always be nice in blog posts!</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>commentText</span> : any<div class='sub-desc'><p>Required The comment text</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>any</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SuperBlog.Comments'>SuperBlog.Comments</span><br/></div><a href='#!/api/SuperBlog.Comments-method-init' class='name expandable'>init</a>( <span class='pre'></span> ) : comments</div><div class='description'><div class='short'>I initialise the Comments object and return it. ...</div><div class='long'><p>I initialise the Comments object and return it.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>comments</span><div class='sub-desc'>\n<ul><li><span class='pre'>property1</span> : <a href=\"#!/api/SuperBlog.Comments\" rel=\"SuperBlog.Comments\" class=\"docClass\">SuperBlog.Comments</a><div class='sub-desc'></div></li></ul></div></li></ul></div></div></div><div id='method-removeComment' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SuperBlog.Comments'>SuperBlog.Comments</span><br/></div><a href='#!/api/SuperBlog.Comments-method-removeComment' class='name expandable'>removeComment</a>( <span class='pre'>commentId, [silent]</span> ) : any</div><div class='description'><div class='short'>I remove a comment and optionally tell the client ...</div><div class='long'><p>I remove a comment and optionally tell the client</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>commentId</span> : numeric<div class='sub-desc'><p>Required The comment Id</p>\n</div></li><li><span class='pre'>silent</span> : boolean (optional)<div class='sub-desc'><p>Send reply to client</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>any</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-writeToLog' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/SuperBlog.MyBaseClass' rel='SuperBlog.MyBaseClass' class='defined-in docClass'>SuperBlog.MyBaseClass</a><br/></div><a href='#!/api/SuperBlog.MyBaseClass-method-writeToLog' class='name expandable'>writeToLog</a>( <span class='pre'>[something]</span> ) : void<strong class='private signature' >private</strong></div><div class='description'><div class='short'>I write something to a log file. ...</div><div class='long'><p>I write something to a log file.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>something</span> : any (optional)<div class='sub-desc'><p>Some text or object or whatever that you want to log</p>\n<p>Defaults to: <code>''</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});