import 'package:flutter/material.dart';
import 'package:realestate/routes.dart';
import 'package:realestate/screens/splash/splash_screen.dart';
import 'package:realestate/theme.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Sava real estate',
      theme: theme(),
      initialRoute: SplashScreen.routeName,
      routes: routes,
    );
  }
}
