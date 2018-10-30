let  typeDefs=`# source: http://115.159.154.194:8080/graphql
# timestamp: Wed Aug 08 2018 16:16:50 GMT+0800 (中国标准时间)

schema {
  query: QueryType_JPA
  mutation: Mutation_SpringMVC
}

"""This directive allows results to be deferred during execution"""
directive @defer on FIELD

"""管理员"""
type Administ {
  """姓名"""
  name(orderBy: OrderByDirection): String

  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long
  id(orderBy: OrderByDirection): String

  """出生年月"""
  birthday(orderBy: OrderByDirection): String
  number(orderBy: OrderByDirection): String

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String

  """密码"""
  pwd(orderBy: OrderByDirection): String

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """客户等级"""
  level(orderBy: OrderByDirection): CustomerLevelEnum

  """联系方式"""
  tel(orderBy: OrderByDirection): String

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long
}

"""管理员"""
input Administ_ {
  """姓名"""
  name: String
  id: String

  """出生年月"""
  birthday: String
  number: String

  """密码"""
  pwd: String

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean

  """客户等级"""
  level: CustomerLevelEnum

  """联系方式"""
  tel: String
}

"""AdministList 负责包装一组Administ数据，你可以在查询中使用分页、排序、过滤等功能"""
type AdministList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [Administ]
}

"""������������"""
type Advertisement {
  """������������"""
  url(orderBy: OrderByDirection): String

  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long
  id(orderBy: OrderByDirection): String
  number(orderBy: OrderByDirection): String

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String

  """/image"""
  image(orderBy: OrderByDirection): String

  """/������������"""
  textContent(orderBy: OrderByDirection): String

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long
}

"""������������"""
input Advertisement_ {
  """������������"""
  url: String
  id: String
  number: String

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean

  """/image"""
  image: String

  """/������������"""
  textContent: String
}

"""AdvertisementList 负责包装一组Advertisement数据，你可以在查询中使用分页、排序、过滤等功能"""
type AdvertisementList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [Advertisement]
}

"""Built-in java.math.BigDecimal"""
scalar BigDecimal

"""买车沟通"""
type CarCommunication {
  """关注车型"""
  carType(orderBy: OrderByDirection): String

  """分配时间"""
  distributeTime(orderBy: OrderByDirection): Long
  number(orderBy: OrderByDirection): String

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String

  """认证手机号"""
  phone(orderBy: OrderByDirection): String

  """客户信息"""
  customer(orderBy: OrderByDirection): Customer

  """详细沟通记录"""
  communicationItems(orderBy: OrderByDirection): [CommunicationRecord]

  """业务员"""
  salesman(orderBy: OrderByDirection): Salesman

  """状态：分为待分配,待回访，已回访，已转换，战败五种"""
  status(orderBy: OrderByDirection): CarCommunicationStatusEnum

  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long
  id(orderBy: OrderByDirection): String

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """类型：分为来访，回访两种"""
  type(orderBy: OrderByDirection): CarCommunicationTypeEnum

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long
}

"""买车沟通"""
input CarCommunication_ {
  """关注车型"""
  carType: String

  """分配时间"""
  distributeTime: Long
  number: String

  """认证手机号"""
  phone: String

  """客户信息"""
  customer: Customer_

  """详细沟通记录"""
  communicationItems: [CommunicationRecord_]

  """业务员"""
  salesman: Salesman_

  """状态：分为待分配,待回访，已回访，已转换，战败五种"""
  status: CarCommunicationStatusEnum
  id: String

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean

  """类型：分为来访，回访两种"""
  type: CarCommunicationTypeEnum
}

"""CarCommunicationList 负责包装一组CarCommunication数据，你可以在查询中使用分页、排序、过滤等功能"""
type CarCommunicationList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [CarCommunication]
}

"""
买车沟通状态分为五种、A 待分配, B 待回访，C 已回访，D 已转换，E 战败（F 已结束）五种   买车沟通用的是战败   保险回访用的是已结束
"""
enum CarCommunicationStatusEnum {
  A
  B
  C
  D
  E
  F
}

"""买车接待类型，分为两种：来访、回访"""
enum CarCommunicationTypeEnum {
  A
  B
}

"""车辆信息"""
type CarInfo {
  """金融方案"""
  financialSchemesItems(orderBy: OrderByDirection): [FinancialScheme]

  """图片"""
  image(orderBy: OrderByDirection): String

  """标签"""
  label(orderBy: OrderByDirection): String
  number(orderBy: OrderByDirection): String

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String

  """销售数量"""
  salesVolume(orderBy: OrderByDirection): String

  """车型亮点"""
  carBrightPoints(orderBy: OrderByDirection): String

  """方案扫描件（核算方案）"""
  schemeScan(orderBy: OrderByDirection): String

  """配置亮点"""
  brightPoints(orderBy: OrderByDirection): String

  """品牌"""
  brand(orderBy: OrderByDirection): String

  """厂商指导价"""
  guidePrice(orderBy: OrderByDirection): String

  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long
  id(orderBy: OrderByDirection): String

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """型号"""
  model(orderBy: OrderByDirection): String

  """阿里云服务器文件名"""
  filename(orderBy: OrderByDirection): String

  """价格"""
  price(orderBy: OrderByDirection): BigDecimal

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long
}

"""车辆信息"""
input CarInfo_ {
  """金融方案"""
  financialSchemesItems: [FinancialScheme_]

  """图片"""
  image: String

  """标签"""
  label: String
  number: String

  """销售数量"""
  salesVolume: String

  """车型亮点"""
  carBrightPoints: String

  """方案扫描件（核算方案）"""
  schemeScan: String

  """配置亮点"""
  brightPoints: String

  """品牌"""
  brand: String

  """厂商指导价"""
  guidePrice: String
  id: String

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean

  """型号"""
  model: String

  """阿里云服务器文件名"""
  filename: String

  """价格"""
  price: BigDecimal
}

"""CarInfoList 负责包装一组CarInfo数据，你可以在查询中使用分页、排序、过滤等功能"""
type CarInfoList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [CarInfo]
}

"""车辆来源"""
type CarSource {
  """名称"""
  name(orderBy: OrderByDirection): String

  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long
  id(orderBy: OrderByDirection): String
  number(orderBy: OrderByDirection): String

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String

  """类型,当前类型分为自营/合作，对应回传信息为own/coporate,是否禁用"""
  type(orderBy: OrderByDirection): CarSourceTypeEnum

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """地址"""
  address(orderBy: OrderByDirection): String

  """联系方式"""
  tel(orderBy: OrderByDirection): String

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long
}

"""车辆来源"""
input CarSource_ {
  """名称"""
  name: String
  id: String
  number: String

  """类型,当前类型分为自营/合作，对应回传信息为own/coporate,是否禁用"""
  type: CarSourceTypeEnum

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean

  """地址"""
  address: String

  """联系方式"""
  tel: String
}

"""CarSourceList 负责包装一组CarSource数据，你可以在查询中使用分页、排序、过滤等功能"""
type CarSourceList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [CarSource]
}

"""类型,当前类型分为自营/合作，对应回传信息为own/coporate"""
enum CarSourceTypeEnum {
  """自己经营的"""
  OWN

  """与人合作的"""
  COPORATE
}

"""沟通记录详情"""
type CommunicationRecord {
  """关注车型"""
  carType(orderBy: OrderByDirection): String

  """沟通记录"""
  record(orderBy: OrderByDirection): String

  """客户级别：分为ABC三等"""
  level(orderBy: OrderByDirection): CustomerLevelEnum

  """分配人"""
  administ(orderBy: OrderByDirection): Administ

  """分配时间"""
  distributeTime(orderBy: OrderByDirection): Long

  """查看时间"""
  watchTime(orderBy: OrderByDirection): String
  id(orderBy: OrderByDirection): String

  """状态：分为待分配,待回访，已回访，已转换，战败五种"""
  status(orderBy: OrderByDirection): CarCommunicationStatusEnum

  """业务员"""
  salesman(orderBy: OrderByDirection): Salesman

  """主管意见"""
  directorSuggestion(orderBy: OrderByDirection): String

  """主管"""
  director(orderBy: OrderByDirection): String

  """沟通时间"""
  communicateTime(orderBy: OrderByDirection): Long
}

"""沟通记录详情"""
input CommunicationRecord_ {
  """关注车型"""
  carType: String

  """沟通记录"""
  record: String

  """客户级别：分为ABC三等"""
  level: CustomerLevelEnum

  """分配人"""
  administ: Administ_

  """分配时间"""
  distributeTime: Long

  """查看时间"""
  watchTime: String
  id: String

  """状态：分为待分配,待回访，已回访，已转换，战败五种"""
  status: CarCommunicationStatusEnum

  """业务员"""
  salesman: Salesman_

  """主管意见"""
  directorSuggestion: String

  """主管"""
  director: String

  """沟通时间"""
  communicateTime: Long
}

"""
CommunicationRecordList 负责包装一组CommunicationRecord数据，你可以在查询中使用分页、排序、过滤等功能
"""
type CommunicationRecordList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [CommunicationRecord]
}

"""车辆信息"""
type ConcernCar {
  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long
  id(orderBy: OrderByDirection): String
  number(orderBy: OrderByDirection): String

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String

  """汽车信息"""
  carInfo(orderBy: OrderByDirection): CarInfo

  """客户"""
  customer(orderBy: OrderByDirection): Customer

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long
}

"""车辆信息"""
input ConcernCar_ {
  id: String
  number: String

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean

  """汽车信息"""
  carInfo: CarInfo_

  """客户"""
  customer: Customer_
}

"""ConcernCarList 负责包装一组ConcernCar数据，你可以在查询中使用分页、排序、过滤等功能"""
type ConcernCarList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [ConcernCar]
}

"""车辆信息"""
type ConcernShop {
  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long
  id(orderBy: OrderByDirection): String
  number(orderBy: OrderByDirection): String

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String

  """客户"""
  customer(orderBy: OrderByDirection): Customer

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long

  """门店"""
  shop(orderBy: OrderByDirection): Shop
}

"""车辆信息"""
input ConcernShop_ {
  id: String
  number: String

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean

  """客户"""
  customer: Customer_

  """门店"""
  shop: Shop_
}

"""ConcernShopList 负责包装一组ConcernShop数据，你可以在查询中使用分页、排序、过滤等功能"""
type ConcernShopList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [ConcernShop]
}

"""客户信息"""
type Customer {
  """客户微信昵称"""
  weixinnick(orderBy: OrderByDirection): String
  number(orderBy: OrderByDirection): String

  """联系方式"""
  tel(orderBy: OrderByDirection): String

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String

  """是否审核  默认false"""
  audit(orderBy: OrderByDirection): Boolean

  """客户姓名"""
  name(orderBy: OrderByDirection): String

  """现住地址"""
  addressNow(orderBy: OrderByDirection): String

  """性别"""
  gender(orderBy: OrderByDirection): String

  """客户级别：分为ABC三等"""
  level(orderBy: OrderByDirection): CustomerLevelEnum

  """出生年月"""
  birthDate(orderBy: OrderByDirection): Long

  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long
  id(orderBy: OrderByDirection): String

  """身份证号"""
  idcard(orderBy: OrderByDirection): String

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """微信号"""
  weixinid(orderBy: OrderByDirection): String

  """身份证地址"""
  address(orderBy: OrderByDirection): String

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long

  """身份证图片，可多张上传图片，请以分号隔开图片短url"""
  idcardpicurls(orderBy: OrderByDirection): String
}

"""客户信息"""
input Customer_ {
  """客户微信昵称"""
  weixinnick: String
  number: String

  """联系方式"""
  tel: String

  """是否审核  默认false"""
  audit: Boolean

  """客户姓名"""
  name: String

  """现住地址"""
  addressNow: String

  """性别"""
  gender: String

  """客户级别：分为ABC三等"""
  level: CustomerLevelEnum

  """出生年月"""
  birthDate: Long
  id: String

  """身份证号"""
  idcard: String

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean

  """微信号"""
  weixinid: String

  """身份证地址"""
  address: String

  """身份证图片，可多张上传图片，请以分号隔开图片短url"""
  idcardpicurls: String
}

"""客户登记，被分为A/B/C"""
enum CustomerLevelEnum {
  """最高级别"""
  A

  """中等级别"""
  B

  """最低级别"""
  C
}

"""CustomerList 负责包装一组Customer数据，你可以在查询中使用分页、排序、过滤等功能"""
type CustomerList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [Customer]
}

"""装潢"""
type Decor {
  """装潢员"""
  upholstery(orderBy: OrderByDirection): String

  """门店"""
  shopName(orderBy: OrderByDirection): String

  """销售员"""
  salesman(orderBy: OrderByDirection): String
  id(orderBy: OrderByDirection): String

  """加装物品"""
  goods(orderBy: OrderByDirection): String

  """总成本"""
  cost(orderBy: OrderByDirection): Long

  """客户姓名"""
  customerName(orderBy: OrderByDirection): String

  """加装费用"""
  goodsRecharge(orderBy: OrderByDirection): Long
}

"""装潢"""
input Decor_ {
  """装潢员"""
  upholstery: String

  """门店"""
  shopName: String

  """销售员"""
  salesman: String
  id: String

  """加装物品"""
  goods: String

  """总成本"""
  cost: Long

  """客户姓名"""
  customerName: String

  """加装费用"""
  goodsRecharge: Long
}

"""DecorList 负责包装一组Decor数据，你可以在查询中使用分页、排序、过滤等功能"""
type DecorList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [Decor]
}

"""反馈"""
type Feedback {
  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long
  id(orderBy: OrderByDirection): String
  number(orderBy: OrderByDirection): String

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String

  """问题分类"""
  problemCategory(orderBy: OrderByDirection): String

  """联系方式"""
  contact(orderBy: OrderByDirection): String

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String

  """“客户"""
  customer(orderBy: OrderByDirection): Customer

  """问题描述"""
  problemDescription(orderBy: OrderByDirection): String

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long
}

"""反馈"""
input Feedback_ {
  id: String
  number: String

  """问题分类"""
  problemCategory: String

  """联系方式"""
  contact: String

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean

  """“客户"""
  customer: Customer_

  """问题描述"""
  problemDescription: String
}

"""FeedbackList 负责包装一组Feedback数据，你可以在查询中使用分页、排序、过滤等功能"""
type FeedbackList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [Feedback]
}

"""金融方案"""
type FinancialScheme {
  id(orderBy: OrderByDirection): String

  """首付百分比"""
  downPaymentRate(orderBy: OrderByDirection): BigDecimal

  """方案更新时间"""
  schemeTime(orderBy: OrderByDirection): Long

  """个人名下/公司名下"""
  underName(orderBy: OrderByDirection): String

  """月供:单位分"""
  monthly(orderBy: OrderByDirection): Long

  """赠送:单位分"""
  presenter(orderBy: OrderByDirection): Long

  """首付:单位分"""
  downPayment(orderBy: OrderByDirection): Long

  """期数/月"""
  periods(orderBy: OrderByDirection): Long

  """定金:单位分"""
  deposit(orderBy: OrderByDirection): Long

  """服务费:单位分"""
  serveMoney(orderBy: OrderByDirection): Long
}

"""金融方案"""
input FinancialScheme_ {
  id: String

  """首付百分比"""
  downPaymentRate: BigDecimal

  """方案更新时间"""
  schemeTime: Long

  """个人名下/公司名下"""
  underName: String

  """月供:单位分"""
  monthly: Long

  """赠送:单位分"""
  presenter: Long

  """首付:单位分"""
  downPayment: Long

  """期数/月"""
  periods: Long

  """定金:单位分"""
  deposit: Long

  """服务费:单位分"""
  serveMoney: Long
}

"""FinancialSchemeList 负责包装一组FinancialScheme数据，你可以在查询中使用分页、排序、过滤等功能"""
type FinancialSchemeList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [FinancialScheme]
}

"""保险信息"""
type Insurance {
  """备注"""
  remark(orderBy: OrderByDirection): String

  """保险时间"""
  time(orderBy: OrderByDirection): Long
  number(orderBy: OrderByDirection): String

  """返点时间"""
  rebateTime(orderBy: OrderByDirection): Long

  """图片"""
  images(orderBy: OrderByDirection): String

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String

  """购车单编号"""
  carNumber(orderBy: OrderByDirection): String

  """业务员提成"""
  salesmanExtract(orderBy: OrderByDirection): String

  """返点"""
  rebate(orderBy: OrderByDirection): BigDecimal

  """客户名字"""
  customerName(orderBy: OrderByDirection): String

  """业务员"""
  salesman(orderBy: OrderByDirection): Salesman

  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long
  id(orderBy: OrderByDirection): String

  """保险金额"""
  amount(orderBy: OrderByDirection): String

  """提车人"""
  carryCarPeople(orderBy: OrderByDirection): String

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String

  """客户微信昵称"""
  weixinnick(orderBy: OrderByDirection): String

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """微信号"""
  weixinid(orderBy: OrderByDirection): String

  """保险公司"""
  company(orderBy: OrderByDirection): String

  """合作单位"""
  cooperativeUnit(orderBy: OrderByDirection): String

  """客户电话"""
  customerTel(orderBy: OrderByDirection): String

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long
}

"""保险信息"""
input Insurance_ {
  """备注"""
  remark: String

  """保险时间"""
  time: Long
  number: String

  """返点时间"""
  rebateTime: Long

  """图片"""
  images: String

  """购车单编号"""
  carNumber: String

  """业务员提成"""
  salesmanExtract: String

  """返点"""
  rebate: BigDecimal

  """客户名字"""
  customerName: String

  """业务员"""
  salesman: Salesman_
  id: String

  """保险金额"""
  amount: String

  """提车人"""
  carryCarPeople: String

  """客户微信昵称"""
  weixinnick: String

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean

  """微信号"""
  weixinid: String

  """保险公司"""
  company: String

  """合作单位"""
  cooperativeUnit: String

  """客户电话"""
  customerTel: String
}

"""保险回访"""
type InsuranceCommunication {
  """业务员"""
  salesman(orderBy: OrderByDirection): Salesman
  number(orderBy: OrderByDirection): String

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String

  """客户姓名"""
  customerName(orderBy: OrderByDirection): String

  """状态：分为待分配,待回访，已回访，已转换，已结束五种"""
  status(orderBy: OrderByDirection): CarCommunicationStatusEnum

  """分配时间"""
  distributeTime(orderBy: OrderByDirection): Long
  communicationItems(orderBy: OrderByDirection): [CommunicationRecord]

  """微信号"""
  weixinid(orderBy: OrderByDirection): String

  """客户微信昵称"""
  weixinnick(orderBy: OrderByDirection): String

  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long
  id(orderBy: OrderByDirection): String

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String

  """保险信息"""
  insurance(orderBy: OrderByDirection): Insurance

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """联系方式"""
  tel(orderBy: OrderByDirection): String

  """现住地址"""
  addressNow(orderBy: OrderByDirection): String

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long
}

"""保险回访"""
input InsuranceCommunication_ {
  """业务员"""
  salesman: Salesman_
  number: String

  """客户姓名"""
  customerName: String

  """状态：分为待分配,待回访，已回访，已转换，已结束五种"""
  status: CarCommunicationStatusEnum

  """分配时间"""
  distributeTime: Long
  communicationItems: [CommunicationRecord_]

  """微信号"""
  weixinid: String

  """客户微信昵称"""
  weixinnick: String
  id: String

  """保险信息"""
  insurance: Insurance_

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean

  """联系方式"""
  tel: String

  """现住地址"""
  addressNow: String
}

"""
InsuranceCommunicationList 负责包装一组InsuranceCommunication数据，你可以在查询中使用分页、排序、过滤等功能
"""
type InsuranceCommunicationList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [InsuranceCommunication]
}

"""订单保险续保信息集合"""
type InsuranceItems {
  id(orderBy: OrderByDirection): String
  insurance(orderBy: OrderByDirection): Insurance
}

"""订单保险续保信息集合"""
input InsuranceItems_ {
  id: String
  insurance: Insurance_
}

"""InsuranceItemsList 负责包装一组InsuranceItems数据，你可以在查询中使用分页、排序、过滤等功能"""
type InsuranceItemsList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [InsuranceItems]
}

"""InsuranceList 负责包装一组Insurance数据，你可以在查询中使用分页、排序、过滤等功能"""
type InsuranceList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [Insurance]
}

"""Long type"""
scalar Long

"""公司按揭"""
type Mortgage {
  """放款时间"""
  loanTime(orderBy: OrderByDirection): Long

  """利息"""
  accrual(orderBy: OrderByDirection): Long

  """返点金额"""
  rePointAmount(orderBy: OrderByDirection): Long

  """签单地址"""
  mortgageAddress(orderBy: OrderByDirection): String

  """销售员"""
  salesman(orderBy: OrderByDirection): String

  """返点利率"""
  rePointRate(orderBy: OrderByDirection): BigDecimal

  """签单费"""
  signBill(orderBy: OrderByDirection): Long
  id(orderBy: OrderByDirection): String

  """4S电话"""
  phone(orderBy: OrderByDirection): String

  """押金"""
  deposit(orderBy: OrderByDirection): Long

  """返点时间"""
  rePointTime(orderBy: OrderByDirection): Long

  """手续费"""
  serviceCharge(orderBy: OrderByDirection): Long

  """4S店"""
  company(orderBy: OrderByDirection): String

  """银行"""
  bank(orderBy: OrderByDirection): String

  """月供:单位分"""
  monthly(orderBy: OrderByDirection): Long

  """签订时间"""
  signTime(orderBy: OrderByDirection): Long

  """贷款金额"""
  loanAmount(orderBy: OrderByDirection): Long

  """首付金额"""
  downPayments(orderBy: OrderByDirection): Long

  """期数/月"""
  periods(orderBy: OrderByDirection): Long

  """签单返点费"""
  signRePointBill(orderBy: OrderByDirection): Long

  """GPS费"""
  GPSCharge(orderBy: OrderByDirection): Long

  """利率"""
  rate(orderBy: OrderByDirection): BigDecimal

  """首付比率"""
  downPaymentRate(orderBy: OrderByDirection): BigDecimal

  """客户姓名"""
  customerName(orderBy: OrderByDirection): String

  """客户电话"""
  customerPhone(orderBy: OrderByDirection): String
}

"""公司按揭"""
input Mortgage_ {
  """放款时间"""
  loanTime: Long

  """利息"""
  accrual: Long

  """返点金额"""
  rePointAmount: Long

  """签单地址"""
  mortgageAddress: String

  """销售员"""
  salesman: String

  """返点利率"""
  rePointRate: BigDecimal

  """签单费"""
  signBill: Long
  id: String

  """4S电话"""
  phone: String

  """押金"""
  deposit: Long

  """返点时间"""
  rePointTime: Long

  """手续费"""
  serviceCharge: Long

  """4S店"""
  company: String

  """银行"""
  bank: String

  """月供:单位分"""
  monthly: Long

  """签订时间"""
  signTime: Long

  """贷款金额"""
  loanAmount: Long

  """首付金额"""
  downPayments: Long

  """期数/月"""
  periods: Long

  """签单返点费"""
  signRePointBill: Long

  """GPS费"""
  GPSCharge: Long

  """利率"""
  rate: BigDecimal

  """首付比率"""
  downPaymentRate: BigDecimal

  """客户姓名"""
  customerName: String

  """客户电话"""
  customerPhone: String
}

"""MortgageList 负责包装一组Mortgage数据，你可以在查询中使用分页、排序、过滤等功能"""
type MortgageList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [Mortgage]
}

"""将所有的SpringMVC.Controller中的Requestmapping方法暴露出来了"""
type Mutation_SpringMVC {
  """修改保险信息"""
  mlshop_updateinsurance(insurance: Insurance_!): Insurance

  """关注车辆"""
  mlshop_concerncar(concerncar: ConcernCar_!): ConcernCar

  """删除反馈"""
  mlshop_removefeedback(feedback: Feedback_!): Feedback

  """删除车辆来源"""
  mlshop_removecarsource(carsource: CarSource_!): CarSource

  """增加管理员"""
  mlshop_addadminist(administ: Administ_!): Administ

  """删除管理员"""
  mlshop_removeadminist(administ: Administ_!): Administ

  """/修改广告"""
  mlshop_updateadvertisement(advertisement: Advertisement_!): Advertisement

  """修改买车沟通信息"""
  mlshop_updatecarcommunication(carcommunication: CarCommunication_!): CarCommunication

  """修改用户信息"""
  mlshop_updatecustomer(customer: Customer_!): Customer

  """删除保险信息"""
  mlshop_removeinsurance(insurance: Insurance_!): Insurance

  """取消关注门店"""
  mlshop_cancelshop(concernshop: ConcernShop_!): ConcernShop

  """修改车辆来源"""
  mlshop_updatecarsource(carsource: CarSource_!): CarSource

  """增加门店"""
  mlshop_addshop(shop: Shop_!): Shop

  """启用车辆来源"""
  mlshop_enablcarsource(carsource: CarSource_!): CarSource

  """禁用车辆来源"""
  mlshop_disablecarsource(carsource: CarSource_!): CarSource

  """增加买车沟通信息"""
  mlshop_addcarcommunication(carcommunication: CarCommunication_!): CarCommunication

  """取消关注车辆"""
  mlshop_cancelcar(concerncar: ConcernCar_!): ConcernCar

  """启用管理员"""
  mlshop_enabladminist(administ: Administ_!): Administ

  """修改管理员"""
  mlshop_updateadminist(administ: Administ_!): Administ

  """增加保险信息"""
  mlshop_addinsurance(insurance: Insurance_!): Insurance

  """禁用门店"""
  mlshop_disableshop(shop: Shop_!): Shop

  """禁用业务员"""
  mlshop_disablesalesman(salesman: Salesman_!): Salesman
  ABC_createAcceptance(client: User_!): User

  """修改业务员"""
  mlshop_updatesalesman(salesman: Salesman_!): Salesman

  """增加保险回访记录"""
  mlshop_addinsurancecommunication(insurancecommunication: InsuranceCommunication_!): InsuranceCommunication

  """启用业务员"""
  mlshop_enablsalesman(salesman: Salesman_!): Salesman

  """修改保险回访记录"""
  mlshop_updateinsurancecommunication(insurancecommunication: InsuranceCommunication_!): InsuranceCommunication

  """关注门店"""
  mlshop_concernshop(concernshop: ConcernShop_!): ConcernShop

  """修改订单"""
  mlshop_updateorder(order: Order_!): Order

  """增加业务员"""
  mlshop_addsalesman(salesman: Salesman_!): Salesman

  """添加车辆信息"""
  mlshop_addcarinfo(carinfo: CarInfo_!): CarInfo

  """删除门店"""
  mlshop_removeshop(shop: Shop_!): Shop

  """/添加广告"""
  mlshop_addadvertisement(advertisement: Advertisement_!): Advertisement

  """启用门店"""
  mlshop_enablshop(shop: Shop_!): Shop

  """删除保险回访记录"""
  mlshop_removeinsurancecommunication(insurancecommunication: InsuranceCommunication_!): InsuranceCommunication

  """禁用用户信息"""
  mlshop_disablecustomer(customer: Customer_!): Customer

  """删除车辆信息"""
  mlshop_removecarinfo(carinfo: CarInfo_!): CarInfo

  """添加反馈"""
  mlshop_addfeedback(feedback: Feedback_!): Feedback

  """修改买车沟通信息"""
  mlshop_addcarcommunicationrecord(communicationrecord: CommunicationRecord_!, carcommunicationid: String!): CarCommunication

  """删除业务员"""
  mlshop_removesalesman(salesman: Salesman_!): Salesman

  """/删除广告"""
  mlshop_removeadvertisement(advertisement: Advertisement_!): Advertisement

  """删除买车沟通信息"""
  mlshop_removecarcommunication(carcommunication: CarCommunication_!): CarCommunication

  """增加用户信息"""
  mlshop_addcustomer(customer: Customer_!): Customer

  """启用用户信息"""
  mlshop_enablcustomer(customer: Customer_!): Customer

  """修改车辆信息"""
  mlshop_updatecarinfo(carinfo: CarInfo_!): CarInfo

  """修改门店"""
  mlshop_updateshop(shop: Shop_!): Shop

  """禁用管理员"""
  mlshop_disableadminist(administ: Administ_!): Administ

  """删除用户信息"""
  mlshop_removecustomer(customer: Customer_!): Customer

  """增加车辆来源"""
  mlshop_addcarsource(carsource: CarSource_!): CarSource

  """添加订单"""
  mlshop_addorder(order: Order_!): Order
}

"""订单"""
type Order {
  """数量"""
  count(orderBy: OrderByDirection): Int

  """品牌"""
  brand(orderBy: OrderByDirection): String

  """方案"""
  paySchemes(orderBy: OrderByDirection): [PayScheme]

  """订单分配"""
  orderAllocateStatusEnum(orderBy: OrderByDirection): OrderAllocateStatusEnum

  """备注"""
  remark(orderBy: OrderByDirection): String

  """车辆来源"""
  carSource(orderBy: OrderByDirection): CarSource

  """纸质表格"""
  paperTable(orderBy: OrderByDirection): String

  """保险原件"""
  originalInsurance(orderBy: OrderByDirection): String

  """订单类别"""
  orderTypeEnum(orderBy: OrderByDirection): OrderTypeEnum
  id(orderBy: OrderByDirection): String

  """装潢"""
  decors(orderBy: OrderByDirection): [Decor]

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """尾款：/分"""
  tailMoney(orderBy: OrderByDirection): Long

  """型号"""
  model(orderBy: OrderByDirection): String

  """订单状态"""
  orderStatusEnum(orderBy: OrderByDirection): OrderStatusEnum

  """保险订单集合"""
  insuranceItems(orderBy: OrderByDirection): [InsuranceItems]

  """合格证复印件"""
  certificateImage(orderBy: OrderByDirection): String
  number(orderBy: OrderByDirection): String

  """门店"""
  shop(orderBy: OrderByDirection): Shop

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String

  """车身颜色"""
  carColor(orderBy: OrderByDirection): String

  """客户信息"""
  customer(orderBy: OrderByDirection): Customer

  """定金：/分"""
  frontMoney(orderBy: OrderByDirection): Long

  """保险"""
  insurance(orderBy: OrderByDirection): Insurance

  """详细数据"""
  carDescribe(orderBy: OrderByDirection): String

  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long

  """登记证书"""
  registrationCertificate(orderBy: OrderByDirection): String

  """经手人(门店中的业务员)"""
  salesman(orderBy: OrderByDirection): Salesman

  """按揭"""
  mortgages(orderBy: OrderByDirection): [Mortgage]

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long
}

"""订单"""
input Order_ {
  """数量"""
  count: Int

  """品牌"""
  brand: String

  """方案"""
  paySchemes: [PayScheme_]

  """订单分配"""
  orderAllocateStatusEnum: OrderAllocateStatusEnum

  """备注"""
  remark: String

  """车辆来源"""
  carSource: CarSource_

  """纸质表格"""
  paperTable: String

  """保险原件"""
  originalInsurance: String

  """订单类别"""
  orderTypeEnum: OrderTypeEnum
  id: String

  """装潢"""
  decors: [Decor_]

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean

  """尾款：/分"""
  tailMoney: Long

  """型号"""
  model: String

  """订单状态"""
  orderStatusEnum: OrderStatusEnum

  """保险订单集合"""
  insuranceItems: [InsuranceItems_]

  """合格证复印件"""
  certificateImage: String
  number: String

  """门店"""
  shop: Shop_

  """车身颜色"""
  carColor: String

  """客户信息"""
  customer: Customer_

  """定金：/分"""
  frontMoney: Long

  """保险"""
  insurance: Insurance_

  """详细数据"""
  carDescribe: String

  """登记证书"""
  registrationCertificate: String

  """经手人(门店中的业务员)"""
  salesman: Salesman_

  """按揭"""
  mortgages: [Mortgage_]
}

"""订单分配 分为两种WAIT:未分配  /  ALREADY:已分配"""
enum OrderAllocateStatusEnum {
  WAIT
  ALREADY
}

enum OrderByDirection {
  """升序排列"""
  ASC

  """降序排列"""
  DESC
}

"""OrderList 负责包装一组Order数据，你可以在查询中使用分页、排序、过滤等功能"""
type OrderList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [Order]
}

"""订单状态 分为三种NEW:新订单  /  FINISH:已完结  /  REFUND:已退款"""
enum OrderStatusEnum {
  NEW
  FINISH
  REFUND
}

"""订单状态 分为三种A:全额购车单  /  B:厂价金融购车单  /  C:按揭购车单"""
enum OrderTypeEnum {
  A
  B
  C
}

"""分页器"""
input paginator {
  """当前页号（从1开始）"""
  page: Int

  """每页大小"""
  size: Int
}

"""订单_支付方案"""
type PayScheme {
  """GPS费"""
  GPSCharge(orderBy: OrderByDirection): Long

  """发票价 单位：分"""
  receiptPrice(orderBy: OrderByDirection): Long

  """原价 单位：分"""
  oldPrice(orderBy: OrderByDirection): Long

  """快递费 单位：分"""
  expressFee(orderBy: OrderByDirection): Long

  """售价 单位: 分"""
  price(orderBy: OrderByDirection): Long

  """进价 单位：分"""
  purchasePrice(orderBy: OrderByDirection): Long

  """上牌费 单位：分"""
  onCardFee(orderBy: OrderByDirection): Long

  """业务员提成"""
  salesmanExtract(orderBy: OrderByDirection): String

  """购置税(包) 单位：分"""
  purchaseTax(orderBy: OrderByDirection): Long
  id(orderBy: OrderByDirection): String

  """购置税（客户） 单位：分"""
  customerTax(orderBy: OrderByDirection): Long

  """销售提成 单位：分"""
  extract(orderBy: OrderByDirection): Long

  """押金"""
  deposit(orderBy: OrderByDirection): Long

  """服务费 单位：分"""
  serviceFee(orderBy: OrderByDirection): Long

  """发票高开补税 单位：分"""
  taxCompensation(orderBy: OrderByDirection): Long
}

"""订单_支付方案"""
input PayScheme_ {
  """GPS费"""
  GPSCharge: Long

  """发票价 单位：分"""
  receiptPrice: Long

  """原价 单位：分"""
  oldPrice: Long

  """快递费 单位：分"""
  expressFee: Long

  """售价 单位: 分"""
  price: Long

  """进价 单位：分"""
  purchasePrice: Long

  """上牌费 单位：分"""
  onCardFee: Long

  """业务员提成"""
  salesmanExtract: String

  """购置税(包) 单位：分"""
  purchaseTax: Long
  id: String

  """购置税（客户） 单位：分"""
  customerTax: Long

  """销售提成 单位：分"""
  extract: Long

  """押金"""
  deposit: Long

  """服务费 单位：分"""
  serviceFee: Long

  """发票高开补税 单位：分"""
  taxCompensation: Long
}

"""PaySchemeList 负责包装一组PayScheme数据，你可以在查询中使用分页、排序、过滤等功能"""
type PaySchemeList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [PayScheme]
}

"""UserRoleItem who uses the application"""
type Privi {
  name(orderBy: OrderByDirection): String

  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long
  id(orderBy: OrderByDirection): String
  number(orderBy: OrderByDirection): String

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long
}

"""UserRoleItem who uses the application"""
input Privi_ {
  name: String
  id: String
  number: String

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean
}

"""PriviList 负责包装一组Privi数据，你可以在查询中使用分页、排序、过滤等功能"""
type PriviList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [Privi]
}

"""过滤条件"""
input qfilter {
  """下一个条件"""
  next: qfilter

  """键，可以带导航的.号"""
  key: String

  """操作符"""
  operator: QueryFilterOperator

  """条件组合符号"""
  combinator: QueryFilterCombinator

  """值，可以是和like相对应的%abc%"""
  value: String
}

"""查询表达式组合操作符"""
enum QueryFilterCombinator {
  """并且的意思"""
  AND

  """或者的意思"""
  OR

  """取反"""
  NOT
}

"""查询过滤操作符"""
enum QueryFilterOperator {
  """is null"""
  ISNULL

  """is not null"""
  ISNOTNULL

  """>"""
  GREATTHAN

  """<"""
  LESSTHAN

  """>="""
  NOTLESSTHAN

  """<="""
  NOTGREATTHAN

  """="""
  EQUEAL

  """in"""
  IN

  """not in"""
  NOTIN

  """not"""
  NOT

  """like"""
  LIKE
}

"""DDD领域模型下的JPA查询,所有类型均有createtime（创建时间属性),updatedtime(修改时间属性)"""
type QueryType_JPA {
  """金融方案"""
  FinancialScheme(id: String): FinancialScheme

  """客户信息"""
  Customer(number: String, id: String): Customer

  """UserRoleItem who uses the application"""
  Privi(id: String, number: String): Privi

  """������������"""
  Advertisement(id: String, number: String): Advertisement

  """车辆信息"""
  ConcernShop(id: String, number: String): ConcernShop

  """RolePrevilegeItem who uses the application"""
  RolePrevilegeItem(id: String): RolePrevilegeItem

  """车辆信息"""
  CarInfo(number: String, id: String): CarInfo

  """门店"""
  Shop(id: String, number: String): Shop

  """反馈"""
  Feedback(id: String, number: String): Feedback

  """保险回访"""
  InsuranceCommunication(number: String, id: String): InsuranceCommunication

  """买车沟通"""
  CarCommunication(number: String, id: String): CarCommunication

  """车辆信息"""
  ConcernCar(id: String, number: String): ConcernCar

  """订单保险续保信息集合"""
  InsuranceItems(id: String): InsuranceItems

  """UserRoleItem who uses the application"""
  Role(id: String, number: String): Role

  """销售员"""
  Salesman(id: String, number: String): Salesman

  """用户"""
  User(number: String, id: String): User

  """公司按揭"""
  Mortgage(id: String): Mortgage

  """保险信息"""
  Insurance(number: String, id: String): Insurance

  """管理员"""
  Administ(id: String, number: String): Administ

  """沟通记录详情"""
  CommunicationRecord(id: String): CommunicationRecord

  """UserRoleItem who uses the application"""
  UserRoleItem(id: String): UserRoleItem

  """车辆来源"""
  CarSource(id: String, number: String): CarSource

  """订单_支付方案"""
  PayScheme(id: String): PayScheme

  """订单"""
  Order(id: String, number: String): Order

  """装潢"""
  Decor(id: String): Decor

  """
  FinancialSchemeList 负责包装一组FinancialScheme数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  FinancialSchemeList(paginator: paginator, qfilter: qfilter): FinancialSchemeList

  """
  CustomerList 负责包装一组Customer数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  CustomerList(paginator: paginator, qfilter: qfilter): CustomerList

  """PriviList 负责包装一组Privi数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 """
  PriviList(paginator: paginator, qfilter: qfilter): PriviList

  """
  AdvertisementList 负责包装一组Advertisement数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  AdvertisementList(paginator: paginator, qfilter: qfilter): AdvertisementList

  """
  ConcernShopList 负责包装一组ConcernShop数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  ConcernShopList(paginator: paginator, qfilter: qfilter): ConcernShopList

  """
  RolePrevilegeItemList 负责包装一组RolePrevilegeItem数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  RolePrevilegeItemList(paginator: paginator, qfilter: qfilter): RolePrevilegeItemList

  """CarInfoList 负责包装一组CarInfo数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 """
  CarInfoList(paginator: paginator, qfilter: qfilter): CarInfoList

  """ShopList 负责包装一组Shop数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 """
  ShopList(paginator: paginator, qfilter: qfilter): ShopList

  """
  FeedbackList 负责包装一组Feedback数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  FeedbackList(paginator: paginator, qfilter: qfilter): FeedbackList

  """
  InsuranceCommunicationList 负责包装一组InsuranceCommunication数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  InsuranceCommunicationList(paginator: paginator, qfilter: qfilter): InsuranceCommunicationList

  """
  CarCommunicationList 负责包装一组CarCommunication数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  CarCommunicationList(paginator: paginator, qfilter: qfilter): CarCommunicationList

  """
  ConcernCarList 负责包装一组ConcernCar数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  ConcernCarList(paginator: paginator, qfilter: qfilter): ConcernCarList

  """
  InsuranceItemsList 负责包装一组InsuranceItems数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  InsuranceItemsList(paginator: paginator, qfilter: qfilter): InsuranceItemsList

  """RoleList 负责包装一组Role数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 """
  RoleList(paginator: paginator, qfilter: qfilter): RoleList

  """
  SalesmanList 负责包装一组Salesman数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  SalesmanList(paginator: paginator, qfilter: qfilter): SalesmanList

  """UserList 负责包装一组User数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 """
  UserList(paginator: paginator, qfilter: qfilter): UserList

  """
  MortgageList 负责包装一组Mortgage数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  MortgageList(paginator: paginator, qfilter: qfilter): MortgageList

  """
  InsuranceList 负责包装一组Insurance数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  InsuranceList(paginator: paginator, qfilter: qfilter): InsuranceList

  """
  AdministList 负责包装一组Administ数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  AdministList(paginator: paginator, qfilter: qfilter): AdministList

  """
  CommunicationRecordList 负责包装一组CommunicationRecord数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  CommunicationRecordList(paginator: paginator, qfilter: qfilter): CommunicationRecordList

  """
  UserRoleItemList 负责包装一组UserRoleItem数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  UserRoleItemList(paginator: paginator, qfilter: qfilter): UserRoleItemList

  """
  CarSourceList 负责包装一组CarSource数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  CarSourceList(paginator: paginator, qfilter: qfilter): CarSourceList

  """
  PaySchemeList 负责包装一组PayScheme数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 
  """
  PaySchemeList(paginator: paginator, qfilter: qfilter): PaySchemeList

  """OrderList 负责包装一组Order数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 """
  OrderList(paginator: paginator, qfilter: qfilter): OrderList

  """DecorList 负责包装一组Decor数据，你可以在查询中使用分页、排序、过滤等功能,请使用content字段请求实际的字段 """
  DecorList(paginator: paginator, qfilter: qfilter): DecorList
}

"""UserRoleItem who uses the application"""
type Role {
  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long
  id(orderBy: OrderByDirection): String
  number(orderBy: OrderByDirection): String

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean
  previlegeItems(orderBy: OrderByDirection): [RolePrevilegeItem]

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String
  name(orderBy: OrderByDirection): String

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long
}

"""UserRoleItem who uses the application"""
input Role_ {
  id: String
  number: String

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean
  previlegeItems: [RolePrevilegeItem_]
  name: String
}

"""RoleList 负责包装一组Role数据，你可以在查询中使用分页、排序、过滤等功能"""
type RoleList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [Role]
}

"""RolePrevilegeItem who uses the application"""
type RolePrevilegeItem {
  id(orderBy: OrderByDirection): String
  privi(orderBy: OrderByDirection): Privi
}

"""RolePrevilegeItem who uses the application"""
input RolePrevilegeItem_ {
  id: String
  privi: Privi_
}

"""RolePrevilegeItemList 负责包装一组RolePrevilegeItem数据，你可以在查询中使用分页、排序、过滤等功能"""
type RolePrevilegeItemList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [RolePrevilegeItem]
}

"""销售员"""
type Salesman {
  """所属门店"""
  shop(orderBy: OrderByDirection): Shop

  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long
  id(orderBy: OrderByDirection): String
  number(orderBy: OrderByDirection): String

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String

  """联系方式"""
  tel(orderBy: OrderByDirection): String

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long

  """姓名"""
  name(orderBy: OrderByDirection): String
}

"""销售员"""
input Salesman_ {
  """所属门店"""
  shop: Shop_
  id: String
  number: String

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean

  """联系方式"""
  tel: String

  """姓名"""
  name: String
}

"""SalesmanList 负责包装一组Salesman数据，你可以在查询中使用分页、排序、过滤等功能"""
type SalesmanList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [Salesman]
}

"""门店"""
type Shop {
  """名称"""
  name(orderBy: OrderByDirection): String

  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long
  id(orderBy: OrderByDirection): String
  number(orderBy: OrderByDirection): String

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String

  """类型，分为加盟店和自营店来个闹钟"""
  shopTypeEnum(orderBy: OrderByDirection): ShopTypeEnum

  """地址"""
  address(orderBy: OrderByDirection): String

  """联系方式"""
  tel(orderBy: OrderByDirection): String

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long
}

"""门店"""
input Shop_ {
  """名称"""
  name: String
  id: String
  number: String

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean

  """类型，分为加盟店和自营店来个闹钟"""
  shopTypeEnum: ShopTypeEnum

  """地址"""
  address: String

  """联系方式"""
  tel: String
}

"""ShopList 负责包装一组Shop数据，你可以在查询中使用分页、排序、过滤等功能"""
type ShopList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [Shop]
}

"""类型，分为加盟店和自营店两种"""
enum ShopTypeEnum {
  """加盟"""
  OWN

  """与人合作的"""
  COPORATE
}

"""用户"""
type User {
  """密码"""
  password(orderBy: OrderByDirection): String
  roleItems(orderBy: OrderByDirection): [UserRoleItem]
  number(orderBy: OrderByDirection): String

  """上次修改人ID"""
  updateactorid(orderBy: OrderByDirection): String

  """用户名"""
  username(orderBy: OrderByDirection): String

  """在用手机号"""
  phone(orderBy: OrderByDirection): String

  """创建时间，以毫秒为单位"""
  createtime(orderBy: OrderByDirection): Long
  id(orderBy: OrderByDirection): String

  """创建人ID"""
  createactorid(orderBy: OrderByDirection): String

  """是否禁用，主要是用来做假删除"""
  disabled(orderBy: OrderByDirection): Boolean

  """注册手机号"""
  registerPhone(orderBy: OrderByDirection): String

  """客户信息"""
  customer(orderBy: OrderByDirection): Customer

  """头像"""
  headImg(orderBy: OrderByDirection): String

  """上次修改时间，以毫秒为单位"""
  updatetime(orderBy: OrderByDirection): Long
}

"""用户"""
input User_ {
  """密码"""
  password: String
  roleItems: [UserRoleItem_]
  number: String

  """用户名"""
  username: String

  """在用手机号"""
  phone: String
  id: String

  """是否禁用，主要是用来做假删除"""
  disabled: Boolean

  """注册手机号"""
  registerPhone: String

  """客户信息"""
  customer: Customer_

  """头像"""
  headImg: String
}

"""UserList 负责包装一组User数据，你可以在查询中使用分页、排序、过滤等功能"""
type UserList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [User]
}

"""UserRoleItem who uses the application"""
type UserRoleItem {
  id(orderBy: OrderByDirection): String
  role(orderBy: OrderByDirection): Role
}

"""UserRoleItem who uses the application"""
input UserRoleItem_ {
  id: String
  role: Role_
}

"""UserRoleItemList 负责包装一组UserRoleItem数据，你可以在查询中使用分页、排序、过滤等功能"""
type UserRoleItemList {
  """根据paginator.size和数据库记录数得出的总页数"""
  totalPages: Long

  """总的记录数"""
  totalElements: Long

  """实际返回的内容列表"""
  content: [UserRoleItem]
}
`;export default  typeDefs;