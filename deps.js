// This file was autogenerated by ../../library/closure/bin/build/depswriter.py.
// Please do not edit.
goog.addDependency('../../../apps/pstj/color/color.js', ['pstj.color'], ['goog.color']);
goog.addDependency('../../../apps/pstj/color/color_test.js', ['pstj.color_test'], ['goog.testing.PropertyReplacer', 'goog.testing.PseudoRandom', 'goog.testing.jsunit', 'pstj.color']);
goog.addDependency('../../../apps/pstj/config/configure.js', ['pstj.configure'], []);
goog.addDependency('../../../apps/pstj/control/base.js', ['pstj.control.Base'], ['goog.Disposable', 'goog.asserts', 'goog.events.EventHandler']);
goog.addDependency('../../../apps/pstj/date/utils.js', ['pstj.date.utils'], ['goog.array', 'goog.i18n.DateTimeFormat', 'goog.i18n.DateTimeFormat.Format', 'goog.string']);
goog.addDependency('../../../apps/pstj/ds/iclock.js', ['pstj.ds.IClock'], []);
goog.addDependency('../../../apps/pstj/ds/imagelist.js', ['pstj.ds.Image', 'pstj.ds.ImageList', 'pstj.ds.ImageList.EventType'], ['goog.async.Delay', 'goog.events', 'goog.events.EventType', 'goog.math.Size', 'goog.net.ImageLoader', 'pstj.ds.List', 'pstj.ds.ListItem']);
goog.addDependency('../../../apps/pstj/ds/list.js', ['pstj.ds.List', 'pstj.ds.List.Event', 'pstj.ds.List.EventType'], ['goog.array', 'goog.events', 'goog.events.EventTarget', 'pstj.ds.ListItem']);
goog.addDependency('../../../apps/pstj/ds/listitem.js', ['pstj.ds.ListItem', 'pstj.ds.ListItem.EventType'], ['goog.events.EventTarget', 'goog.string', 'pstj.object']);
goog.addDependency('../../../apps/pstj/ds/maprotation.js', ['pstj.ds.MapRotator'], ['goog.Disposable']);
goog.addDependency('../../../apps/pstj/ds/timeprovider.js', ['pstj.ds.TimeProvider'], ['goog.array', 'pstj.configure']);
goog.addDependency('../../../apps/pstj/fx/dragdropgroup.js', ['pstj.fx.DragDropGroup'], ['goog.dom.classlist', 'goog.fx.DragDropGroup', 'pstj.fx.Dragger']);
goog.addDependency('../../../apps/pstj/fx/dragger.js', ['pstj.fx.Dragger'], ['goog.async.AnimationDelay', 'goog.fx.Dragger', 'pstj.style.css']);
goog.addDependency('../../../apps/pstj/graphics/canvas.js', ['pstj.graphics.Canvas'], ['goog.events.EventTarget', 'goog.events.EventType', 'goog.style']);
goog.addDependency('../../../apps/pstj/graphics/draw.js', ['pstj.graphics.Draw'], ['goog.Disposable']);
goog.addDependency('../../../apps/pstj/graphics/smooth.js', ['pstj.graphics.Smooth'], ['goog.Disposable', 'goog.async.AnimationDelay']);
goog.addDependency('../../../apps/pstj/graphics/timeline.js', ['pstj.graphics.Timeline'], ['goog.dom.classlist', 'goog.events', 'goog.events.EventHandler', 'goog.events.EventType', 'goog.functions', 'pstj.configure', 'pstj.date.utils', 'pstj.graphics.Canvas', 'pstj.graphics.Draw', 'pstj.graphics.Smooth', 'pstj.ui.Templated']);
goog.addDependency('../../../apps/pstj/math/utils.js', ['pstj.math.utils'], []);
goog.addDependency('../../../apps/pstj/mvc/simplerouter.js', ['pstj.mvc.SimpleRouter'], ['goog.History', 'goog.array', 'goog.events']);
goog.addDependency('../../../apps/pstj/ng/filters.js', ['pstj.ng.filters'], ['pstj.date.utils']);
goog.addDependency('../../../apps/pstj/ng/ngtemplate.js', ['pstj.ng.Template'], ['goog.array', 'goog.dom.classlist', 'goog.dom.dataset', 'goog.dom.query', 'pstj.ds.ListItem', 'pstj.ng.filters', 'pstj.ui.Templated']);
goog.addDependency('../../../apps/pstj/object/object.js', ['pstj.object'], ['goog.array', 'goog.object']);
goog.addDependency('../../../apps/pstj/resource/resource.js', ['pstj.resource', 'pstj.resource.Local', 'pstj.resource.Resource'], ['goog.json.NativeJsonProcessor', 'goog.net.XhrIo', 'goog.storage.Storage', 'goog.storage.mechanism.mechanismfactory', 'goog.string', 'goog.uri.utils', 'pstj.configure']);
goog.addDependency('../../../apps/pstj/style/css.js', ['pstj.style.css'], ['goog.dom', 'goog.userAgent', 'goog.userAgent.product']);
goog.addDependency('../../../apps/pstj/style/css3.js', ['pstj.lab.style.css'], ['goog.array', 'goog.dom', 'goog.userAgent']);
goog.addDependency('../../../apps/pstj/themes/theme.js', ['pstj.themes.theme'], ['goog.object', 'goog.pubsub.PubSub']);
goog.addDependency('../../../apps/pstj/ui/async.js', ['pstj.ui.Async'], ['goog.functions', 'pstj.graphics.Smooth', 'pstj.ui.Templated']);
goog.addDependency('../../../apps/pstj/ui/clock.js', ['pstj.ui.Clock'], ['goog.ui.Component', 'pstj.ds.IClock', 'pstj.ds.TimeProvider']);
goog.addDependency('../../../apps/pstj/ui/coupledinput.js', ['pstj.ui.CoupledInput'], ['goog.Disposable', 'goog.dom', 'goog.dom.classes', 'goog.dom.forms', 'goog.events', 'goog.events.EventType', 'goog.ui.LabelInput']);
goog.addDependency('../../../apps/pstj/ui/custombutton.js', ['pstj.ui.Button'], ['goog.events.EventType', 'goog.ui.CustomButton', 'pstj.ui.CustomButtonRenderer']);
goog.addDependency('../../../apps/pstj/ui/custombuttonrenderer.js', ['pstj.ui.CustomButtonRenderer'], ['goog.dom.a11y', 'goog.dom.classes', 'goog.ui.ButtonRenderer']);
goog.addDependency('../../../apps/pstj/ui/elementids.js', ['pstj.ui.IdGenerator'], []);
goog.addDependency('../../../apps/pstj/ui/scrollarea.js', ['pstj.ui.CustomScrollArea'], ['goog.async.Delay', 'goog.dom', 'goog.events.EventType', 'goog.style', 'goog.ui.Component.EventType', 'goog.ui.Slider', 'pstj.style.css', 'pstj.ui.Sizeable', 'pstj.ui.Sizeable.EventType']);
goog.addDependency('../../../apps/pstj/ui/scrolllist.js', ['pstj.ui.ScrollList'], ['goog.style', 'pstj.ui.CustomScrollArea', 'pstj.ui.IdGenerator']);
goog.addDependency('../../../apps/pstj/ui/sheets/isheet.js', ['pstj.ui.ISheet'], []);
goog.addDependency('../../../apps/pstj/ui/sheets/scrollsheet.js', ['pstj.ui.ScrollSheet'], ['goog.style', 'pstj.ui.ISheet', 'pstj.ui.Templated']);
goog.addDependency('../../../apps/pstj/ui/sheets/sheetframe.js', ['pstj.ui.SheetFrame'], ['goog.asserts', 'goog.async.Throttle', 'goog.dom', 'goog.dom.ViewportSizeMonitor', 'goog.math.Size', 'goog.style', 'pstj.ui.ISheet', 'pstj.ui.Templated']);
goog.addDependency('../../../apps/pstj/ui/sheets/touchsheet.js', ['pstj.ui.TouchSheet'], ['goog.async.Delay', 'goog.dom.classlist', 'goog.events.KeyCodes', 'goog.events.KeyHandler', 'goog.events.MouseWheelEvent', 'goog.events.MouseWheelHandler', 'goog.events.MouseWheelHandler.EventType', 'goog.style', 'pstj.lab.style.css', 'pstj.math.utils', 'pstj.ui.ISheet', 'pstj.ui.Touchable', 'pstj.ui.Touchable.EventType', 'pstj.ui.Touchable.PubSub']);
goog.addDependency('../../../apps/pstj/ui/sizeable.js', ['pstj.ui.Sizeable', 'pstj.ui.Sizeable.EventType'], ['goog.async.Throttle', 'goog.dom.ViewportSizeMonitor', 'goog.events.EventHandler', 'goog.ui.Component']);
goog.addDependency('../../../apps/pstj/ui/templated.js', ['pstj.ui.Templated'], ['goog.dom', 'goog.ui.Component']);
goog.addDependency('../../../apps/pstj/ui/touchable/movetouch.js', ['pstj.ui.MoveTouch'], ['pstj.ui.Touchable', 'pstj.ui.Touchable.EventType']);
goog.addDependency('../../../apps/pstj/ui/touchable/touchable.js', ['pstj.ui.Touchable', 'pstj.ui.Touchable.Event', 'pstj.ui.Touchable.EventType', 'pstj.ui.Touchable.PubSub'], ['goog.events', 'goog.functions', 'goog.pubsub.PubSub', 'goog.ui.Component.EventType', 'pstj.ui.Async']);
goog.addDependency('../../../apps/pstj/ui/uploads.js', ['pstj.ui.Upload', 'pstj.ui.Upload.Event'], ['goog.dom', 'goog.events', 'goog.events.Event', 'goog.net.EventType', 'goog.net.IframeIo', 'pstj.ui.Templated']);
goog.addDependency('../../../apps/pstj/ui/widget/pager.js', ['pstj.widget.Pager'], ['goog.array', 'goog.dom', 'goog.dom.classlist', 'pstj.ds.List', 'pstj.ds.ListItem', 'pstj.ng.Template', 'pstj.templates', 'pstj.ui.Templated']);
goog.addDependency('../../../apps/pstj/ui/widget/select.js', ['pstj.widget.Select', 'pstj.widget.SelectionItem'], ['goog.array', 'goog.dom.classlist', 'goog.events.EventType', 'goog.ui.Component.EventType', 'goog.ui.CustomButton', 'pstj.configure', 'pstj.ds.List', 'pstj.ds.ListItem', 'pstj.graphics.Smooth', 'pstj.select', 'pstj.ui.CustomButtonRenderer', 'pstj.ui.Templated']);
