import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-secondary">МебельСервис</h1>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:block">Заказать звонок</Button>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/2f867310-4110-49c5-b75a-8eed7a4cc46e/files/78cb3e82-26fb-4845-9a16-513a17bb56a9.jpg" 
            alt="Мебельная мастерская" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            Перетяжка и ремонт<br />мягкой мебели
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональное восстановление мебели с гарантией качества. Более 10 лет опыта работы.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Наши работы
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-secondary">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по восстановлению и обновлению мягкой мебели
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Sofa" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Перетяжка мебели</CardTitle>
                <CardDescription className="text-base">
                  Замена обивки диванов, кресел, стульев. Широкий выбор тканей и материалов.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wrench" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Ремонт каркаса</CardTitle>
                <CardDescription className="text-base">
                  Восстановление деревянных и металлических конструкций мебели.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Layers" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Замена наполнителя</CardTitle>
                <CardDescription className="text-base">
                  Обновление поролона, синтепона и других наполнителей для комфорта.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Ремонт механизмов</CardTitle>
                <CardDescription className="text-base">
                  Замена и ремонт раскладных механизмов, пружинных блоков.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Sparkles" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Химчистка</CardTitle>
                <CardDescription className="text-base">
                  Профессиональная чистка обивки с выведением сложных пятен.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Truck" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Доставка</CardTitle>
                <CardDescription className="text-base">
                  Бесплатный вывоз и доставка мебели по городу после ремонта.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-lg opacity-90">лет опыта</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">2000+</div>
              <div className="text-lg opacity-90">выполненных заказов</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">гарантия качества</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24ч</div>
              <div className="text-lg opacity-90">средний срок работы</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-secondary">Контакты</h2>
              <p className="text-lg text-muted-foreground">
                Свяжитесь с нами удобным способом или оставьте заявку
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={20} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-1">Телефон</CardTitle>
                        <CardDescription className="text-base">
                          +7 (999) 123-45-67<br />
                          Ежедневно с 9:00 до 21:00
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={20} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-1">Email</CardTitle>
                        <CardDescription className="text-base">
                          info@mebelservice.ru<br />
                          Ответим в течение часа
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={20} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-1">Адрес</CardTitle>
                        <CardDescription className="text-base">
                          г. Москва, ул. Мебельная, д. 15<br />
                          Пн-Сб: 9:00-20:00, Вс: 10:00-18:00
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Оставить заявку</CardTitle>
                  <CardDescription className="text-base">
                    Заполните форму, и мы свяжемся с вами в ближайшее время
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input placeholder="Телефон" type="tel" />
                  </div>
                  <div>
                    <Textarea placeholder="Опишите вашу задачу" rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">МебельСервис</h3>
              <p className="text-sm opacity-80">Профессиональная перетяжка мебели с 2014 года</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:text-primary">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:text-primary">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:text-primary">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
          <div className="text-center mt-6 text-sm opacity-70">
            © 2024 МебельСервис. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
