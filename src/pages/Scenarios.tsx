import { useState } from "react";
import { Home, Heart, Users, Briefcase, Building } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import familyImg from "@/assets/scene-family.png";
import medicalImg from "@/assets/scene-medical.png";
import socialImg from "@/assets/scene-social.png";
import workImg from "@/assets/scene-work.png";

const Scenarios = () => {
  const scenarios = [
    {
      id: "family",
      icon: Home,
      title: "家庭沟通",
      subtitle: "让家人间的交流更加温暖",
      problem: "家人间沟通困难，需要反复喊话，容易产生误解和焦虑",
      solution: "实时将语音转为文字，让家人能够平静、准确地交流，重建情感连接",
      story: {
        name: "张爷爷的故事",
        content: "张爷爷今年75岁，由于年龄增长听力下降，与孙子的交流越来越困难。自从使用听呗后，孙子说的话都能清晰地显示在屏幕上，祖孙俩的关系变得更加亲密，每天都能愉快地聊天。",
        quote: "现在我能清楚地'听到'孙子说的每一句话，感觉我们的距离更近了。"
      },
      image: familyImg,
      benefits: [
        "消除沟通障碍，减少家庭矛盾",
        "提高交流效率，节省时间精力",
        "增进家庭成员间的理解和信任",
        "让老人更好地融入家庭生活"
      ]
    },
    {
      id: "medical",
      icon: Heart,
      title: "医疗问诊",
      subtitle: "准确理解医嘱，守护健康",
      problem: "听不清医生的诊断和医嘱，可能导致用药错误和健康风险",
      solution: "将医生的话实时转为文字，确保患者准确理解医疗信息，保存记录供后续查阅",
      story: {
        name: "李医生的推荐",
        content: "作为一名从业20年的医生，我经常遇到听力不佳的患者。听呗让我的诊疗更加顺畅，患者能够准确理解我的建议，大大降低了医疗风险。现在我会主动推荐患者使用。",
        quote: "这个工具不仅方便了患者，也让我的工作更加高效和安全。"
      },
      image: medicalImg,
      benefits: [
        "准确记录医生的诊断和建议",
        "避免因误解造成的用药错误",
        "保存完整的就医记录",
        "方便与家人分享医疗信息"
      ]
    },
    {
      id: "social",
      icon: Users,
      title: "社交聚会",
      subtitle: "重拾社交信心，享受快乐时光",
      problem: "在嘈杂环境中无法参与多人对话，感到孤立和尴尬",
      solution: "聚焦说话人的声音，过滤环境噪音，让用户能够轻松参与社交活动",
      story: {
        name: "王女士的蜕变",
        content: "王女士因为听力问题，已经两年没有参加朋友聚会了。使用听呗后，她可以清楚地看到朋友们在说什么，重新找回了社交的乐趣。现在她是朋友圈里最活跃的人之一。",
        quote: "听呗让我重新拥有了社交生活，我不再害怕参加聚会了。"
      },
      image: socialImg,
      benefits: [
        "在嘈杂环境中也能清楚交流",
        "参与多人对话不再困难",
        "增强社交自信心",
        "扩大社交圈，丰富生活"
      ]
    },
    {
      id: "work",
      icon: Briefcase,
      title: "工作环境",
      subtitle: "提高工作效率，避免沟通失误",
      problem: "会议中遗漏重要信息，可能导致工作失误和职业发展受阻",
      solution: "实时记录会议内容，生成文字纪要，确保不遗漏任何重要信息",
      story: {
        name: "职场人士的效率提升",
        content: "在科技公司工作的小李，每天都有大量会议。使用听呗后，他不再担心遗漏重要信息，会议记录清晰完整，工作效率显著提升，获得了领导的认可。",
        quote: "听呗不仅帮助我解决了听力问题，还让我成为团队中最高效的人。"
      },
      image: workImg,
      benefits: [
        "完整记录会议内容",
        "准确理解工作任务和要求",
        "提高工作效率和准确性",
        "增强职场竞争力"
      ]
    }
  ];

  const [activeScenario, setActiveScenario] = useState(scenarios[0].id);
  const currentScenario = scenarios.find(s => s.id === activeScenario) || scenarios[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#E8F4F8] to-[#F0F4F8]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-[#2C4A6B]">
                使用场景
              </h1>
              <p className="text-xl text-muted-foreground">
                无论在何处，听呗都能帮您打破沟通障碍
              </p>
            </div>
          </div>
        </section>

        {/* Scenario Selector */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs value={activeScenario} onValueChange={setActiveScenario} className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto bg-white shadow-md">
                {scenarios.map((scenario) => (
                  <TabsTrigger
                    key={scenario.id}
                    value={scenario.id}
                    className="flex flex-col items-center gap-3 py-6 data-[state=active]:bg-[#E8F4F8] data-[state=active]:text-[#2C4A6B]"
                  >
                    <div className="p-3 rounded-full bg-[#E8956D]/10 data-[state=active]:bg-[#E8956D]/20">
                      <scenario.icon className="h-6 w-6 text-[#E8956D]" />
                    </div>
                    <span className="text-sm font-medium">{scenario.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {scenarios.map((scenario) => (
                <TabsContent key={scenario.id} value={scenario.id} className="animate-fade-in">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="order-2 lg:order-1">
                      <img
                        src={scenario.image}
                        alt={scenario.title}
                        className="rounded-2xl shadow-[var(--shadow-card)] w-full"
                      />
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2 space-y-6">
                      <div>
                        <h2 className="text-3xl font-bold mb-2 text-[#2C4A6B]">{scenario.title}</h2>
                        <p className="text-xl text-[#E8956D]">{scenario.subtitle}</p>
                      </div>

                      <Card className="border-none bg-red-50 shadow-sm">
                        <CardHeader>
                          <CardTitle className="text-lg text-red-600">痛点问题</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-base">{scenario.problem}</p>
                        </CardContent>
                      </Card>

                      <Card className="border-none bg-[#E8F4F8] shadow-sm">
                        <CardHeader>
                          <CardTitle className="text-lg text-[#2C4A6B]">听呗解决方案</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-base">{scenario.solution}</p>
                        </CardContent>
                      </Card>

                      <div>
                        <h3 className="font-semibold mb-4 text-[#2C4A6B] text-lg">核心优势</h3>
                        <ul className="space-y-3">
                          {scenario.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <span className="text-[#E8956D] mt-1 text-lg">✓</span>
                              <span className="text-base">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* User Story */}
                  <Card className="mt-12 bg-gradient-to-br from-[#FFF8F3] to-[#FFF5EE] border-none shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl text-[#2C4A6B]">{scenario.story.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {scenario.story.content}
                      </p>
                      <blockquote className="border-l-4 border-[#E8956D] pl-4 italic text-foreground text-lg">
                        "{scenario.story.quote}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Public Services Note */}
        <section className="py-20 bg-gradient-to-br from-[#F8F9FA] to-[#E8F4F8]">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto bg-white shadow-lg border-none">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-[#E8F4F8]">
                    <Building className="h-8 w-8 text-[#2C4A6B]" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2 text-[#2C4A6B]">公共服务场景</CardTitle>
                    <CardDescription className="text-base">
                      银行、政务大厅、医院等公共服务场所的理想助手
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                  在银行办理业务、政务大厅办事、医院挂号等场景中，听呗能够帮助听障人士独立完成各项事务，无需依赖他人，保护个人隐私，提高办事效率。
                </p>
                <ul className="space-y-3">
                  {[
                    "独立完成银行业务办理",
                    "清楚理解工作人员的说明",
                    "准确填写各类表格和文件",
                    "保护个人隐私和信息安全"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-[#E8956D] mt-1 text-lg">•</span>
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Scenarios;
