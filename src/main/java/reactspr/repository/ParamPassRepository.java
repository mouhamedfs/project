package reactspr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import reactspr.domain.ParamPass;

@Repository
public interface ParamPassRepository extends JpaRepository<ParamPass, Long> {
}
