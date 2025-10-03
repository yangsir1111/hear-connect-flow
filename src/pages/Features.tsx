import { Mic, Type, Globe, Save, Zap, Shield, Clock, MessageSquare } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const coreFeatures = [
    {
      icon: Mic,
      title: "实时语音识别",
      description: "基于先进AI技术，实现<200ms超低延迟，98%准确率",
      details: [
        "先进的语音识别技术，准确率高达98%",
        "超低延迟，响应时间小于200毫秒",
        "嘈杂环境智能降噪，提高识别准确度",
        "支持连续对话，无需反复启动"
      ]
    },
    {
      icon: Type,
      title: "无障碍显示设计",
      description: "专为视障和听障人士优化的显示体验",
      details: [
        "字体大小三档调节（标准/大/特大）",
        "高对比度模式，确保清晰可读",
        "屏幕阅读器完美兼容",
        "简洁界面，操作直观便捷"
      ]
    },
    {
      icon: Globe,
      title: "多语言与方言支持",
      description: "支持中文、英文、日文、韩文及16种中国方言",
      details: [
        "中文、英文、日文、韩文等主流语言",
        "粤语、四川话、东北话等16种方言",
        "口音自适应，识别更准确",
        "语言自动检测，无需手动切换"
      ]
    },
    {
      icon: Save,
      title: "数据管理与安全",
      description: "灵活的存储方案，保护您的隐私安全",
      details: [
        "本地存储，数据完全掌控",
        "可选云端同步，多设备访问",
        "端到端加密，保护隐私安全",
        "历史记录管理，随时查阅"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: "快速启动",
      description: "一键启动，无需繁琐设置"
    },
    {
      icon: Shield,
      title: "隐私保护",
      description: "数据加密，安全可靠"
    },
    {
      icon: Clock,
      title: "历史记录",
      description: "自动保存，方便回顾"
    },
    {
      icon: MessageSquare,
      title: "实时对话",
      description: "连续识别，流畅交流"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#E8F4F8] to-[#F0F4F8]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-[#2C4A6B]">
                核心功能
              </h1>
              <p className="text-xl text-muted-foreground">
                强大的语音识别技术，为您提供无障碍沟通体验
              </p>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreFeatures.map((feature, index) => (
                <Card key={index} className="hover-lift bg-white shadow-md border-none">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-4 rounded-full bg-[#E8F4F8]">
                        <feature.icon className="h-8 w-8 text-[#2C4A6B]" />
                      </div>
                      <div>
                        <CardTitle className="mb-2 text-[#2C4A6B]">{feature.title}</CardTitle>
                        <CardDescription className="text-base">{feature.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="text-[#E8956D] mt-1 text-lg">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-20 bg-gradient-to-br from-[#F8F9FA] to-[#E8F4F8]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#2C4A6B]">更多特色功能</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalFeatures.map((feature, index) => (
                <Card key={index} className="text-center hover-lift bg-white shadow-md border-none">
                  <CardHeader>
                    <div className="mx-auto p-4 rounded-full bg-[#E8F4F8] w-fit mb-4">
                      <feature.icon className="h-8 w-8 text-[#E8956D]" />
                    </div>
                    <CardTitle className="text-lg text-[#2C4A6B]">{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-[#2C4A6B]">技术规格</h2>
              <Card className="bg-gradient-to-br from-[#E8F4F8] to-white shadow-lg border-none">
                <CardContent className="pt-8 pb-8">
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <dt className="font-semibold text-[#E8956D] mb-2 text-lg">平台要求</dt>
                      <dd className="text-muted-foreground text-base">微信小程序环境</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[#E8956D] mb-2 text-lg">网络要求</dt>
                      <dd className="text-muted-foreground text-base">最低128kbps</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[#E8956D] mb-2 text-lg">识别延迟</dt>
                      <dd className="text-muted-foreground text-base">小于200毫秒</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[#E8956D] mb-2 text-lg">识别准确率</dt>
                      <dd className="text-muted-foreground text-base">98%以上</dd>
                    </div>
                    <div className="md:col-span-2">
                      <dt className="font-semibold text-[#E8956D] mb-2 text-lg">设备兼容性</dt>
                      <dd className="text-muted-foreground text-base">支持iOS 10+和Android 5.0+设备</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
