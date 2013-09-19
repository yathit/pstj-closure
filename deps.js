// This file was autogenerated by ../../library/closure/bin/build/depswriter.py.
// Please do not edit.
goog.addDependency('../../../apps/pstj/color/color.js', ['pstj.color'], ['goog.color']);
goog.addDependency('../../../apps/pstj/color/color_test.js', ['pstj.color_test'], ['goog.testing.PropertyReplacer', 'goog.testing.PseudoRandom', 'goog.testing.jsunit', 'pstj.color']);
goog.addDependency('../../../apps/pstj/config/configure.js', ['pstj.configure'], []);
goog.addDependency('../../../apps/pstj/control/base.js', ['pstj.control.Base'], ['goog.Disposable', 'goog.asserts', 'goog.events.EventHandler']);
goog.addDependency('../../../apps/pstj/date/utils.js', ['pstj.date.utils'], ['goog.array', 'goog.i18n.DateTimeFormat', 'goog.i18n.DateTimeFormat.Format', 'goog.string']);
goog.addDependency('../../../apps/pstj/demos/tableview/tableview_demo.js', ['pstj.demos.tableview'], ['goog.dom', 'pstj.ds.List', 'pstj.ui.TableView']);
goog.addDependency('../../../apps/pstj/ds/cache.js', ['pstj.ds.Cache'], ['goog.object']);
goog.addDependency('../../../apps/pstj/ds/iclock.js', ['pstj.ds.IClock'], []);
goog.addDependency('../../../apps/pstj/ds/ilistitem.js', ['pstj.ds.IListItem', 'pstj.ds.RecordID', 'pstj.ds.RecordValue'], []);
goog.addDependency('../../../apps/pstj/ds/imagelist.js', ['pstj.ds.Image', 'pstj.ds.ImageList', 'pstj.ds.ImageList.EventType'], ['goog.async.Delay', 'goog.events', 'goog.events.EventType', 'goog.math.Size', 'goog.net.ImageLoader', 'goog.string', 'pstj.ds.List', 'pstj.ds.ListItem']);
goog.addDependency('../../../apps/pstj/ds/list.js', ['pstj.ds.List', 'pstj.ds.List.Event', 'pstj.ds.List.EventType'], ['goog.array', 'goog.async.Delay', 'goog.events', 'goog.events.EventTarget', 'pstj.ds.ListItem']);
goog.addDependency('../../../apps/pstj/ds/listitem.js', ['pstj.ds.ListItem', 'pstj.ds.ListItem.EventType'], ['goog.asserts', 'goog.events.EventTarget', 'goog.object', 'goog.string', 'pstj.ds.IListItem', 'pstj.object']);
goog.addDependency('../../../apps/pstj/ds/maprotation.js', ['pstj.ds.MapRotator'], ['goog.Disposable']);
goog.addDependency('../../../apps/pstj/ds/timeprovider.js', ['pstj.ds.TimeProvider'], ['goog.array', 'pstj.configure', 'pstj.ds.IClock']);
goog.addDependency('../../../apps/pstj/error/errorhandler.js', ['pstj.error.ErrorHandler', 'pstj.error.ErrorHandler.Error', 'pstj.error.throwError'], ['goog.pubsub.PubSub', 'pstj.control.Base']);
goog.addDependency('../../../apps/pstj/fx/dragdropgroup.js', ['pstj.fx.DragDropGroup'], ['goog.dom.classlist', 'goog.fx.DragDropGroup', 'pstj.fx.Dragger']);
goog.addDependency('../../../apps/pstj/fx/dragger.js', ['pstj.fx.Dragger'], ['goog.async.AnimationDelay', 'goog.fx.Dragger', 'pstj.style.css']);
goog.addDependency('../../../apps/pstj/graphics/canvas.js', ['pstj.graphics.Canvas'], ['goog.dom', 'goog.events.EventTarget', 'goog.events.EventType', 'goog.style']);
goog.addDependency('../../../apps/pstj/graphics/draw.js', ['pstj.graphics.Draw'], ['goog.Disposable']);
goog.addDependency('../../../apps/pstj/graphics/smooth.js', ['pstj.graphics.Smooth'], ['goog.Disposable', 'goog.async.AnimationDelay']);
goog.addDependency('../../../apps/pstj/graphics/timeline.js', ['pstj.graphics.Timeline'], ['goog.dom.classlist', 'goog.events', 'goog.events.EventHandler', 'goog.events.EventType', 'goog.functions', 'pstj.configure', 'pstj.date.utils', 'pstj.graphics.Canvas', 'pstj.graphics.Draw', 'pstj.graphics.Smooth', 'pstj.ui.Templated']);
goog.addDependency('../../../apps/pstj/math/utils.js', ['pstj.math.utils'], []);
goog.addDependency('../../../apps/pstj/mvc/simplerouter.js', ['pstj.mvc.SimpleRouter'], ['goog.History', 'goog.array', 'goog.events']);
goog.addDependency('../../../apps/pstj/ng/filters.js', ['pstj.ng.filters'], ['pstj.date.utils']);
goog.addDependency('../../../apps/pstj/ng/ngtemplate.js', ['pstj.ng.Template'], ['goog.array', 'goog.async.nextTick', 'goog.dom.classlist', 'goog.dom.dataset', 'pstj.ds.ListItem', 'pstj.ng.filters', 'pstj.ui.Touchable']);
goog.addDependency('../../../apps/pstj/object/object.js', ['pstj.object'], ['goog.array', 'goog.object']);
goog.addDependency('../../../apps/pstj/resource/resource.js', ['pstj.resource', 'pstj.resource.Local', 'pstj.resource.Resource'], ['goog.async.nextTick', 'goog.json.NativeJsonProcessor', 'goog.net.Jsonp', 'goog.net.XhrIo', 'goog.storage.Storage', 'goog.storage.mechanism.mechanismfactory', 'goog.string', 'goog.uri.utils', 'pstj.configure']);
goog.addDependency('../../../apps/pstj/style/css.js', ['pstj.style.css'], ['goog.dom', 'goog.userAgent', 'goog.userAgent.product']);
goog.addDependency('../../../apps/pstj/style/css3.js', ['pstj.lab.style.css'], ['goog.array', 'goog.dom', 'goog.userAgent']);
goog.addDependency('../../../apps/pstj/themes/theme.js', ['pstj.themes.theme'], ['goog.object', 'goog.pubsub.PubSub']);
goog.addDependency('../../../apps/pstj/ui/agents/agent.js', ['pstj.ui.Agent'], ['goog.array', 'goog.asserts', 'pstj.ds.Cache']);
goog.addDependency('../../../apps/pstj/ui/agents/clock-agent.js', ['pstj.ui.ClockAgent'], ['pstj.ds.IClock', 'pstj.ds.TimeProvider', 'pstj.ui.Agent']);
goog.addDependency('../../../apps/pstj/ui/agents/ng-agent.js', ['pstj.ui.ngAgent'], ['goog.array', 'goog.asserts', 'goog.async.nextTick', 'goog.dom', 'goog.dom.classlist', 'goog.dom.dataset', 'pstj.ds.ListItem', 'pstj.ng.filters', 'pstj.ui.Agent']);
goog.addDependency('../../../apps/pstj/ui/agents/sizemonitor-agent.js', ['pstj.ui.SizeMonitorAgent'], ['goog.array', 'goog.async.Throttle', 'goog.dom.ViewportSizeMonitor', 'goog.events', 'goog.events.EventType', 'goog.math.Size', 'goog.object', 'goog.style', 'pstj.ui.Agent']);
goog.addDependency('../../../apps/pstj/ui/agents/touch-agent.js', ['pstj.ui.TouchAgent'], ['goog.asserts', 'goog.async.AnimationDelay', 'goog.events', 'goog.events.EventType', 'goog.events.Key', 'pstj.configure', 'pstj.ui.Agent']);
goog.addDependency('../../../apps/pstj/ui/async.js', ['pstj.ui.Async'], ['goog.functions', 'pstj.graphics.Smooth', 'pstj.ui.Templated']);
goog.addDependency('../../../apps/pstj/ui/button/button.js', ['pstj.ui.Button'], ['goog.dom.dataset', 'goog.ui.CustomButton', 'goog.ui.registry', 'pstj.ui.CustomButtonRenderer', 'pstj.ui.TouchAgent']);
goog.addDependency('../../../apps/pstj/ui/button/buttonrenderer.js', ['pstj.ui.CustomButtonRenderer'], ['goog.a11y.aria.Role', 'goog.dom.classes', 'goog.ui.ButtonRenderer']);
goog.addDependency('../../../apps/pstj/ui/button/embededbutton.js', ['pstj.ui.EmbededButtonRenderer'], ['pstj.ui.CustomButtonRenderer']);
goog.addDependency('../../../apps/pstj/ui/clock.js', ['pstj.ui.Clock'], ['goog.ui.Component', 'pstj.ds.IClock', 'pstj.ds.TimeProvider']);
goog.addDependency('../../../apps/pstj/ui/controls/clock-renderer.js', ['pstj.widget.ClockRenderer'], ['pstj.templates', 'pstj.ui.ControlRenderer']);
goog.addDependency('../../../apps/pstj/ui/controls/clock.js', ['pstj.widget.Clock'], ['goog.ui.Component.State', 'goog.ui.Control', 'pstj.ds.ListItem', 'pstj.ui.ClockAgent', 'pstj.ui.ngAgent', 'pstj.widget.ClockRenderer']);
goog.addDependency('../../../apps/pstj/ui/controls/control.js', ['pstj.ui.TouchControl'], ['goog.ui.Component.EventType', 'goog.ui.Component.State', 'goog.ui.Control', 'goog.ui.registry', 'pstj.ui.Template']);
goog.addDependency('../../../apps/pstj/ui/controls/controlrenderer.js', ['pstj.ui.ControlRenderer'], ['goog.asserts', 'goog.ui.Control', 'goog.ui.ControlRenderer', 'pstj.ds.ListItem', 'pstj.templates']);
goog.addDependency('../../../apps/pstj/ui/controls/listitem.js', ['pstj.ui.ListItemControl'], ['goog.ui.Control', 'pstj.ui.ListItemRenderer']);
goog.addDependency('../../../apps/pstj/ui/controls/listitemrenderer.js', ['pstj.ui.ListItemRenderer'], ['goog.asserts', 'pstj.configure', 'pstj.ds.ListItem', 'pstj.templates', 'pstj.ui.ControlRenderer']);
goog.addDependency('../../../apps/pstj/ui/deprecated/coupledinput.js', ['pstj.ui.CoupledInput'], ['goog.Disposable', 'goog.dom', 'goog.dom.classes', 'goog.dom.forms', 'goog.events', 'goog.events.EventType', 'goog.ui.LabelInput']);
goog.addDependency('../../../apps/pstj/ui/deprecated/sizeable.js', ['pstj.ui.Sizeable', 'pstj.ui.Sizeable.EventType'], ['goog.async.Throttle', 'goog.dom.ViewportSizeMonitor', 'goog.events.EventHandler', 'goog.ui.Component']);
goog.addDependency('../../../apps/pstj/ui/elementids.js', ['pstj.ui.IdGenerator'], []);
goog.addDependency('../../../apps/pstj/ui/list.js', ['pstj.ui.List', 'pstj.ui.ListTemplate'], ['pstj.ds.List', 'pstj.templates', 'pstj.ui.Async', 'pstj.ui.ListItem', 'pstj.ui.Template']);
goog.addDependency('../../../apps/pstj/ui/listitem.js', ['pstj.ui.ListItem', 'pstj.ui.ListItemTemplate'], ['goog.asserts', 'goog.dom.classlist', 'pstj.configure', 'pstj.ds.ListItem', 'pstj.templates', 'pstj.ui.Template', 'pstj.ui.Touchable']);
goog.addDependency('../../../apps/pstj/ui/locale/strings.js', ['pstj.ui.Strings'], []);
goog.addDependency('../../../apps/pstj/ui/popoverlayer.js', ['pstj.ui.PopOverLayer', 'pstj.ui.PopOverLayerTemplate'], ['pstj.templates', 'pstj.ui.Template', 'pstj.ui.Templated']);
goog.addDependency('../../../apps/pstj/ui/scrollarea.js', ['pstj.ui.CustomScrollArea'], ['goog.async.Delay', 'goog.dom', 'goog.events.EventType', 'goog.style', 'goog.ui.Component.EventType', 'goog.ui.Slider', 'pstj.style.css', 'pstj.ui.Sizeable', 'pstj.ui.Sizeable.EventType']);
goog.addDependency('../../../apps/pstj/ui/scrolllist.js', ['pstj.ui.ScrollList'], ['goog.style', 'pstj.ui.CustomScrollArea', 'pstj.ui.IdGenerator']);
goog.addDependency('../../../apps/pstj/ui/sheets/isheet.js', ['pstj.ui.ISheet'], []);
goog.addDependency('../../../apps/pstj/ui/sheets/scrollsheet.js', ['pstj.ui.ScrollSheet'], ['goog.style', 'pstj.ui.ISheet', 'pstj.ui.Template', 'pstj.ui.Templated']);
goog.addDependency('../../../apps/pstj/ui/sheets/sheetframe.js', ['pstj.ui.SheetFrame'], ['goog.asserts', 'goog.async.Throttle', 'goog.dom', 'goog.dom.ViewportSizeMonitor', 'goog.math.Size', 'goog.style', 'pstj.ui.ISheet', 'pstj.ui.Templated']);
goog.addDependency('../../../apps/pstj/ui/sheets/touchsheet.js', ['pstj.ui.TouchSheet'], ['goog.async.Delay', 'goog.dom.classlist', 'goog.events.KeyCodes', 'goog.events.KeyHandler', 'goog.events.MouseWheelEvent', 'goog.events.MouseWheelHandler', 'goog.events.MouseWheelHandler.EventType', 'goog.style', 'pstj.lab.style.css', 'pstj.math.utils', 'pstj.ui.ISheet', 'pstj.ui.Touchable', 'pstj.ui.Touchable.EventType', 'pstj.ui.Touchable.PubSub']);
goog.addDependency('../../../apps/pstj/ui/tableview.js', ['pstj.ui.TableView'], ['goog.async.AnimationDelay', 'goog.async.Delay', 'goog.events.EventType', 'goog.events.MouseWheelEvent', 'goog.events.MouseWheelHandler', 'goog.events.MouseWheelHandler.EventType', 'goog.ui.Component', 'pstj.configure', 'pstj.lab.style.css', 'pstj.ui.TableViewItem']);
goog.addDependency('../../../apps/pstj/ui/tableviewitem.js', ['pstj.ui.TableViewItem', 'pstj.ui.TableViewItemRenderer'], ['pstj.templates', 'pstj.ui.ControlRenderer', 'pstj.ui.ngAgent']);
goog.addDependency('../../../apps/pstj/ui/templated/template.js', ['pstj.ui.Template'], ['goog.dom']);
goog.addDependency('../../../apps/pstj/ui/templated/templated.js', ['pstj.ui.Templated'], ['goog.dom', 'goog.ui.Component', 'pstj.ui.Template']);
goog.addDependency('../../../apps/pstj/ui/touchable/movetouch.js', ['pstj.ui.MoveTouch'], ['pstj.ui.Touchable', 'pstj.ui.Touchable.EventType']);
goog.addDependency('../../../apps/pstj/ui/touchable/touchable.js', ['pstj.ui.Touchable', 'pstj.ui.Touchable.Event', 'pstj.ui.Touchable.EventType', 'pstj.ui.Touchable.PubSub'], ['goog.events', 'goog.functions', 'goog.pubsub.PubSub', 'goog.ui.Component.EventType', 'pstj.ui.Async']);
goog.addDependency('../../../apps/pstj/ui/upload.js', ['pstj.ui.Upload', 'pstj.ui.Upload.Event', 'pstj.ui.UploadTemplate'], ['goog.dom', 'goog.events', 'goog.events.Event', 'goog.net.EventType', 'goog.net.IframeIo', 'pstj.templates', 'pstj.ui.Templated']);
goog.addDependency('../../../apps/pstj/ui/widget/controlgroup.js', ['pstj.widget.ControlGroup', 'pstj.widget.ControlGroupTemplate'], ['goog.array', 'goog.asserts', 'pstj.templates', 'pstj.ui.Button', 'pstj.ui.Template', 'pstj.ui.Templated']);
goog.addDependency('../../../apps/pstj/ui/widget/pager.js', ['pstj.widget.Pager', 'pstj.widget.PagerTemplate'], ['goog.array', 'goog.dom', 'goog.dom.classlist', 'pstj.ds.List', 'pstj.ds.ListItem', 'pstj.ng.Template', 'pstj.templates', 'pstj.ui.Template', 'pstj.ui.Templated']);
goog.addDependency('../../../apps/pstj/ui/widget/progress.js', ['pstj.widget.Progress', 'pstj.widget.ProgressTemplate'], ['goog.asserts', 'goog.async.Delay', 'goog.events.EventType', 'pstj.math.utils', 'pstj.templates', 'pstj.ui.Async', 'pstj.ui.Template']);
goog.addDependency('../../../apps/pstj/ui/widget/select.js', ['pstj.widget.Select', 'pstj.widget.SelectTemplate'], ['goog.ui.Component.EventType', 'pstj.templates', 'pstj.ui.Button', 'pstj.ui.List', 'pstj.ui.Template', 'pstj.ui.Templated']);
goog.addDependency('../../../apps/pstj/ui/widget/togglegroup.js', ['pstj.widget.ToggleGroup'], ['goog.ui.Component.EventType', 'goog.ui.Component.State', 'pstj.widget.ControlGroup']);
