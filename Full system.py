class NiaAutoBuilder:

    def __init__(self, repo_path="nia"):
        self.repo_path = Path(repo_path)
        self.repair_engine = RepairEngine(repo_path)
        self.upgrade_engine = UpgradeEngine(repo_path)
        self.module_factory = ModuleFactory(repo_path)
        self.analyzer = CodeAnalyzer(repo_path)

    def execute_build_plan(self, plan):
        print("[NIA BUILDER] Executing build plan...")

        if plan["action"] == "create_module":
            self.module_factory.create(plan["module_name"], plan["content"])

        if plan["action"] == "modify_module":
            self.module_factory.modify(plan["module_name"], plan["changes"])

        self.analyzer.scan()
        self.repair_engine.repair()
        self.upgrade_engine.apply_upgrades()

        self.run_tests()
        self.commit_changes(f"Nia update: {plan['action']} {plan['module_name']}")
        self.deploy()
